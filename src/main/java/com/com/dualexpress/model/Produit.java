
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.dualexpress.model.enums.Categorie;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produit {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nom;
 private String description;
 private Double prix;

 @Enumerated(EnumType.STRING)
 private Categorie categorie;

 private Boolean disponible;

 @ManyToOne
 @JsonIgnore
 private Restaurant restaurant;
}
