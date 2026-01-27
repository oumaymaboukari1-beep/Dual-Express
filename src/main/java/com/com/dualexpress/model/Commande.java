
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.dualexpress.model.enums.StatutCommande;
import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Commande {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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

 public double calculerTotal() {
  return lignes.stream()
          .mapToDouble(LigneCommande::calculerSousTotal)
          .sum() + 7.0; // frais livraison
 }
}
