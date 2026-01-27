
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonManagedReference
    private Produit produit;

    @ManyToOne
    @JsonManagedReference
    private Commande commande;


    public double calculerSousTotal() {
        return quantite * prixUnitaire;
    }
}
