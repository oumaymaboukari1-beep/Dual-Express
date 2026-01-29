package com.dualexpress.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LigneCommandeDTO {

    private Long id;
    private Integer quantite;
    private BigDecimal prixUnitaire;
    private Long produitId;
}