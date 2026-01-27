
package com.dualexpress.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UtilisateurDTO {

    private Long id;
    private String nom;
    private String email;
    private String telephone;
    private String adresse;
    private String role;
    private Boolean disponibilite;
}
