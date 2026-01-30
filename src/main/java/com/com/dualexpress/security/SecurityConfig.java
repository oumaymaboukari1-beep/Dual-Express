// src/main/java/com/dualexpress/security/SecurityConfig.java
package com.dualexpress.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // FRONT origins (pas le back) – ajuste selon ton front (5173 pour Vite, 3000 pour CRA)
    private static final List<String> ALLOWED_ORIGINS = Arrays.asList(
            "http://localhost:5173",
            "http://localhost:3000"
    );

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(
                                // Swagger & H2
                                new AntPathRequestMatcher("/v3/api-docs/**"),
                                new AntPathRequestMatcher("/swagger-ui/**"),
                                new AntPathRequestMatcher("/swagger-ui.html"),
                                new AntPathRequestMatcher("/h2-console/**"),
                                // Auth (register/login)
                                new AntPathRequestMatcher("/auth/**")
                        )
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                )
                .formLogin(form -> form.disable())   // pas de page /login HTML
                .httpBasic(basic -> basic.disable())
                .authorizeHttpRequests(auth -> auth
                        // Swagger & H2
                        .requestMatchers(new AntPathRequestMatcher("/v3/api-docs/**")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/swagger-ui/**")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/swagger-ui.html")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/h2-console/**")).permitAll()

                        // Santé / racine (optionnel pour voir "ça tourne")
                        .requestMatchers(new AntPathRequestMatcher("/"), new AntPathRequestMatcher("/health")).permitAll()

                        // Auth
                        .requestMatchers(new AntPathRequestMatcher("/auth/**")).permitAll()

                        // Publics GET
                        .requestMatchers(HttpMethod.GET, "/restaurants/**", "/produits/**").permitAll()

                        // Zones par rôle (si tu les utilises déjà)
                        .requestMatchers(new AntPathRequestMatcher("/admin/**")).hasRole("ADMIN")
                        .requestMatchers(new AntPathRequestMatcher("/resto/**")).hasAnyRole("RESTAURANT","ADMIN")
                        .requestMatchers(new AntPathRequestMatcher("/livreur/**")).hasAnyRole("LIVREUR","ADMIN")
                        .requestMatchers(new AntPathRequestMatcher("/client/**")).hasAnyRole("CLIENT","ADMIN")

                        // Tout le reste nécessite authentification
                        .anyRequest().authenticated()
                )
                .headers(h -> h.frameOptions(f -> f.disable()));

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration cfg) throws Exception {
        return cfg.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration cfg = new CorsConfiguration();
        cfg.setAllowedOrigins(ALLOWED_ORIGINS);
        cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        cfg.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-XSRF-TOKEN"));
        cfg.setAllowCredentials(true);
        cfg.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cfg);
        return source;
    }
}