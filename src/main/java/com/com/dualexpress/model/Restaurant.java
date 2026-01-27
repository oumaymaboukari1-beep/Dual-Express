
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nomRestaurant;
 private String adresse;
 private String telephone;
 private String email;
 private String horairesOuverture;
 private String description;
 private Double rating;
 private String imageUrl;


 @OneToMany(mappedBy = "restaurant")
 @JsonManagedReference
 private List<Produit> produits;


 @OneToMany(mappedBy = "restaurant")
 private List<Commande> historique = new ArrayList<>();


 public List<Produit> gererMenu() {
  return produits;
 }

 public void ajouterProduit(Produit produit) {
  produits.add(produit);
  produit.setRestaurant(this);
 }

 public void supprimerProduit(Produit produit) {
  produits.remove(produit);
  produit.setRestaurant(null);
 }
}
