
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
 @JsonManagedReference
 private Utilisateur utilisateur;

 @ManyToOne
 @JsonManagedReference
 private Restaurant restaurant;

 @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL)
 @JsonManagedReference
 private List<LigneCommande> lignes = new ArrayList<>();

 @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
 @JsonManagedReference
 private Paiement paiement;



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
