package com.dualexpress.dto;

import lombok.*;

import java.math.BigDecimal;
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

    private BigDecimal montantTotal;
    private BigDecimal fraisLivraison;

    private String adresseLivraison;
    private Long utilisateurId;
    private Long restaurantId;

    private List<LigneCommandeDTO> lignes;
}