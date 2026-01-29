package com.dualexpress.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProduitDTO {
    private Long id;
    private String nom;
    private String description;
    private BigDecimal prix;
    private String categorie;
    private Boolean disponible;
    private Long restaurantId;
}
