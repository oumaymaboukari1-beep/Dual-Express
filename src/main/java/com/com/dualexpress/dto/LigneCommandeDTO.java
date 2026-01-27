
package com.dualexpress.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LigneCommandeDTO {

    private Long id;
    private Integer quantite;
    private Double prixUnitaire;
    private Long produitId;
}
