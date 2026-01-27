
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
public class Utilisateur {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nom;
 private String email;

 @Column(name = "mot_de_passe")
 private String motDePasse;

 private String telephone;
 private String adresse;
 private Boolean disponibilite; // uniquement livreur

 @ManyToOne
 private Role role;

 @JsonIgnore
 @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
 private List<Commande> commandes = new ArrayList<>();
}
