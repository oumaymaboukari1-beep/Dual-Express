
package com.dualexpress.dto;

import lombok.*;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommandeDTO {

    private Long id;
    private Date dateCommande;
    private String statut;
    private Double montantTotal;
    private String adresseLivraison;

    private Long utilisateurId;
    private Long restaurantId;

    private List<LigneCommandeDTO> lignes;
}
