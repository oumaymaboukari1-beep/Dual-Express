
package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

 @JsonBackReference
 @OneToMany(mappedBy = "utilisateur", fetch=FetchType.LAZY)
 private List<Commande> missions = new ArrayList<>();
}
