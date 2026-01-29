package com.dualexpress.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // 👉 à adapter selon ton front
    private static final List<String> ALLOWED_ORIGINS = Arrays.asList(
            "http://localhost:3000",            // React local
            "https://dualexpress.dev"           // ton domaine (si tu as)
    );

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http,
                                                   HandlerMappingIntrospector introspector) throws Exception {

        MvcRequestMatcher.Builder mvc = new MvcRequestMatcher.Builder(introspector);

        http
                // --- CORS pour cookie de session entre domaines ---
                .cors(Customizer.withDefaults())

                // --- CSRF protégé pour SPA: cookie lisible + exceptions sur /auth/** et Swagger ---
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(
                                mvc.pattern("/auth/**"),
                                mvc.pattern("/v3/api-docs/**"),
                                mvc.pattern("/swagger-ui/**"),
                                mvc.pattern("/swagger-ui.html")
                        )
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                )

                // --- Form Login par défaut (session) ---
                .formLogin(form -> form
                        .loginProcessingUrl("/auth/login")    // POST username & password
                        .usernameParameter("username")
                        .passwordParameter("password")
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/auth/logout")             // POST (ou GET si tu veux, mais déconseillé)
                        .deleteCookies("JSESSIONID")
                        .clearAuthentication(true)
                        .invalidateHttpSession(true)
                        .permitAll()
                )
                .httpBasic(basic -> basic.disable())

                // --- AUTORISATIONS ---
                .authorizeHttpRequests(auth -> auth
                        // Swagger & erreurs
                        .requestMatchers(
                                mvc.pattern("/v3/api-docs/**"),
                                mvc.pattern("/swagger-ui/**"),
                                mvc.pattern("/swagger-ui.html"),
                                mvc.pattern("/error"),
                                mvc.pattern("/actuator/**")
                        ).permitAll()

                        // Auth endpoints en libre accès
                        .requestMatchers(mvc.pattern("/auth/**")).permitAll()

                        // Ressources publiques (si tu en as)
                        .requestMatchers(HttpMethod.GET, "/restaurants/**", "/produits/**").permitAll()

                        // Dashboards protégés par rôle (exemples)
                        .requestMatchers(mvc.pattern("/admin/**")).hasRole("ADMIN")
                        .requestMatchers(mvc.pattern("/resto/**")).hasAnyRole("RESTAURANT", "ADMIN")
                        .requestMatchers(mvc.pattern("/livreur/**")).hasAnyRole("LIVREUR", "ADMIN")
                        .requestMatchers(mvc.pattern("/client/**")).hasAnyRole("CLIENT", "ADMIN")

                        // Le reste nécessite une session authentifiée
                        .anyRequest().authenticated()
                )

                // Désactive X-Frame-Options si tu utilises la console H2
                .headers(headers -> headers.frameOptions(frame -> frame.disable()));

        return http.build();
    }

    // CORS pour React (cookies + méthodes)
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration cfg = new CorsConfiguration();
        cfg.setAllowedOrigins(ALLOWED_ORIGINS);
        cfg.setAllowedMethods(Arrays.asList("GET","POST","PUT","PATCH","DELETE","OPTIONS"));
        cfg.setAllowedHeaders(Arrays.asList("Authorization","Content-Type","X-XSRF-TOKEN"));
        cfg.setAllowCredentials(true);
        cfg.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cfg);
        return source;
    }

    @Bean
    public HandlerMappingIntrospector handlerMappingIntrospector() {
        return new HandlerMappingIntrospector();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}