
package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;
import com.dualexpress.model.enums.Categorie;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Produit {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nom;
 private String description;
 private Double prix;

 @Enumerated(EnumType.STRING)
 private Categorie categorie;

 private Boolean disponible;

 @ManyToOne
 private Restaurant restaurant;
}
