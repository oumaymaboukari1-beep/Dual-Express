
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Restaurant {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nomRestaurant;
 private String adresse;
 private String telephone;
 private String email;
 private String horairesOuverture;
 private String description;
 private Double rating;
 private String imageUrl;

 @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
 private List<Produit> produits = new ArrayList<>();

 @JsonIgnore
 @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
 private List<Commande> commandes = new ArrayList<>();
}
