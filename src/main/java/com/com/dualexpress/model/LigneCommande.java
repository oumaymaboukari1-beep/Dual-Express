package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LigneCommande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantite;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal prixUnitaire;

    @ManyToOne(optional = false)
    private Produit produit;

    @ManyToOne
    @JsonIgnore
    private Commande commande;

    public BigDecimal calculerSousTotal() {
        BigDecimal qte = BigDecimal.valueOf(quantite == null ? 0 : quantite);
        BigDecimal pu = prixUnitaire == null ? BigDecimal.ZERO : prixUnitaire;
        return qte.multiply(pu).setScale(2, RoundingMode.HALF_UP);
    }
}