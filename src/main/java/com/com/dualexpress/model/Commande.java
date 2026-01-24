
package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.dualexpress.model.enums.StatutCommande;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Commande {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private Date dateCommande;

 @Enumerated(EnumType.STRING)
 private StatutCommande statut;

 private Double montantTotal;
 private String adresseLivraison;

 @ManyToOne
 private Utilisateur utilisateur;

 @ManyToOne
 private Restaurant restaurant;

 @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL)
 private List<LigneCommande> lignes = new ArrayList<>();

 @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
 private Paiement paiement;

 // ---------- MÉTHODES MÉTIER ----------

 public double calculerTotal() {
  return lignes.stream()
          .mapToDouble(LigneCommande::calculerSousTotal)
          .sum();
 }

 public void validerCommande() {
  this.statut = StatutCommande.VALIDEE;
  this.montantTotal = calculerTotal();
 }
}
