package com.dualexpress.model;

import com.dualexpress.model.enums.MethodePaiement;
import com.dualexpress.model.enums.StatutPaiement;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montant;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date datePaiement;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutPaiement statut;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MethodePaiement methodePaiement;

    @OneToOne
    @JoinColumn(name = "commande_id", nullable = false, unique = true)
    @JsonIgnore
    private Commande commande;
}
