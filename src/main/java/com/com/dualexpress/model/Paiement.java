
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;
import com.dualexpress.model.enums.StatutPaiement;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double montant;
    private Date datePaiement;

    @Enumerated(EnumType.STRING)
    private StatutPaiement statut;

    private String methodePaiement;

    @OneToOne
    @JsonBackReference
    private Commande commande;

    public void effectuerPaiement() {
        this.statut = StatutPaiement.VALIDE;
        this.datePaiement = new Date();
    }
}
