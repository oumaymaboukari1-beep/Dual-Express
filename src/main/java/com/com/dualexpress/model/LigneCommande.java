
package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LigneCommande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantite;
    private Double prixUnitaire;

    @ManyToOne
    private Produit produit;

    @ManyToOne
    private Commande commande;

    // ---------- MÉTHODES MÉTIER ----------
    public double calculerSousTotal() {
        return quantite * prixUnitaire;
    }
}
