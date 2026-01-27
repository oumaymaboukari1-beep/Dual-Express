
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LigneCommande {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantite;
    private Double prixUnitaire;

    @ManyToOne
    private Produit produit;

    @ManyToOne
    @JsonIgnore
    private Commande commande;

    public double calculerSousTotal() {
        return quantite * prixUnitaire;
    }
}
