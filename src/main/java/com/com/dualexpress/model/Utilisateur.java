
package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Utilisateur {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String nom;
 private String email;

 @Column(name = "mot_de_passe")
 private String motDePasse;

 private String telephone;
 private String adresse;
 private Boolean disponibilite;

 @ManyToOne
 private Role role;

 @OneToMany(mappedBy = "utilisateur")
 private List<Commande> missions = new ArrayList<>();
}
