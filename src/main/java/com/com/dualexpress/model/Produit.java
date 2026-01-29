package com.dualexpress.model;

import com.dualexpress.model.enums.Categorie;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produit {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nom;
 private String description;

 @Column(nullable = false, precision = 10, scale = 2)
 private BigDecimal prix;

 @Enumerated(EnumType.STRING)
 private Categorie categorie;

 private Boolean disponible;

 @ManyToOne
 @JsonIgnore
 private Restaurant restaurant;
}