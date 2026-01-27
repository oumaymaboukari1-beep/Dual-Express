
package com.dualexpress.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String nom;
    private String email;
    private String motDePasse;
    private String telephone;
    private String adresse;
    private Long roleId;
}
