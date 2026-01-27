
package com.dualexpress.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProduitRequest {

    private String nom;
    private String description;
    private Double prix;
    private String categorie;
    private Boolean disponible;
    private Long restaurantId;
}
