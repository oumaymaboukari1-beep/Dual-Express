
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
 private String motDePasse;
 private String telephone;
 private String adresse;
 private Boolean disponibilite;

 @ManyToOne
 private Role role;

 @OneToMany(mappedBy = "utilisateur")
 private List<Commande> missions = new ArrayList<>();

 // ---------- MÉTHODES MÉTIER ----------
 public boolean authentifier(String mail, String password) {
  return this.email.equals(mail) && this.motDePasse.equals(password);
 }

 public void accepterCommande(Commande commande) {
  missions.add(commande);
 }

 public void modifierProfil(String nom, String telephone, String adresse) {
  this.nom = nom;
  this.telephone = telephone;
  this.adresse = adresse;
 }
}
