
package com.dualexpress.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProduitDTO {

    private Long id;
    private String nom;
    private String description;
    private Double prix;
    private String categorie;
    private Boolean disponible;
    private Long restaurantId;
}
