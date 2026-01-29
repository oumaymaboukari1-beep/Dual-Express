package com.dualexpress.model;

import com.dualexpress.model.enums.StatutCommande;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Commande {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Temporal(TemporalType.TIMESTAMP)
 private Date dateCommande;

 @Enumerated(EnumType.STRING)
 private StatutCommande statut;

 @Column(nullable = false, precision = 10, scale = 2)
 private BigDecimal montantTotal;

 @Column(nullable = false, precision = 10, scale = 2)
 private BigDecimal fraisLivraison;

 private String adresseLivraison;

 @ManyToOne(optional = false)
 private Utilisateur utilisateur;

 @ManyToOne(optional = false)
 private Restaurant restaurant;

 @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL, orphanRemoval = true)
 @Builder.Default
 private List<LigneCommande> lignes = new ArrayList<>();

 @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
 private Paiement paiement;

 /** Calcule le total: somme(lignes) + fraisLivraison */
 public BigDecimal calculerTotal() {
  BigDecimal sousTotal = lignes == null ? BigDecimal.ZERO :
          lignes.stream()
                  .map(LigneCommande::calculerSousTotal) // doit retourner BigDecimal
                  .reduce(BigDecimal.ZERO, BigDecimal::add);

  BigDecimal frais = (fraisLivraison == null) ? BigDecimal.ZERO : fraisLivraison;

  return sousTotal.add(frais).setScale(2, RoundingMode.HALF_UP);
 }

 /** Recalcule et met à jour montantTotal */
 public void recalculerEtMajTotal() {
  this.montantTotal = calculerTotal();
 }
}