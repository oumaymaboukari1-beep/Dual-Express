package com.dualexpress.dto;

import lombok.*;
import java.util.Set;

public class AuthDtos {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class RegisterRequest {
        private String username;
        private String password;
        private String email;
        private String fullName;
        private Set<String> roles;  // ex: ["CLIENT"]
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class LoginRequest {
        private String username;
        private String password;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MeResponse {
        private Long id;
        private String username;
        private String email;
        private String fullName;
        private Set<String> roles;
    }
}