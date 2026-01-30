package com.dualexpress.dto;

import lombok.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UtilisateurDTO {
    private Long id;
    private String username;
    private String email;
    private String fullName;
    private Set<String> roles;
    private boolean enabled;
}