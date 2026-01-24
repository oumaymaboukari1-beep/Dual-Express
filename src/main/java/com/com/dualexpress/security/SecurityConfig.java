
package com.dualexpress.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())  // Désactive CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/h2-console/**").permitAll() // Autorise H2 Console
                        .anyRequest().permitAll() // API totalement libre (tu veux un login simple)
                )
                .headers(headers -> headers.frameOptions().disable())  // Autorise les frames (H2)
                .formLogin(form -> form.disable()) // Pas de page login HTML
                .httpBasic(basic -> basic.disable()); // Pas d'auth HTTP Basic

        return http.build();
    }
}
