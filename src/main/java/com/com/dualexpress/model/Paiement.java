
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.dualexpress.model.enums.StatutPaiement;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Paiement {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double montant;
    private Date datePaiement;

    @Enumerated(EnumType.STRING)
    private StatutPaiement statut; // EN_ATTENTE, VALIDE, REFUSE

    private String methodePaiement;
    // "CARTE_BANCAIRE", "PLUXEE", "ESPECE"

    @OneToOne
    @JsonIgnore
    private Commande commande;
}
