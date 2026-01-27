
package com.dualexpress.service;

import com.dualexpress.model.Role;
import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.RoleRepository;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    // LOGIN
    public boolean authentifier(String email, String password) {
        return utilisateurRepository.findByEmail(email)
                .map(u -> passwordEncoder.matches(password, u.getMotDePasse()))
                .orElse(false);
    }

    // CREATE USER
    public Utilisateur create(Utilisateur utilisateur) {

        // Charger le rôle depuis la BD
        Role r = roleRepository.findById(utilisateur.getRole().getId())
                .orElseThrow(() -> new RuntimeException("Role introuvable"));

        utilisateur.setRole(r);

        boolean estLivreur = r.getRole().equalsIgnoreCase("LIVREUR");

        // Si non livreur -> disponibilite = null
        if (!estLivreur) {
            utilisateur.setDisponibilite(null);
        }

        // Encoder le password
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));

        return utilisateurRepository.save(utilisateur);
    }

    public List<Utilisateur> getAll() {
        return utilisateurRepository.findAll();
    }

    public Utilisateur getById(Long id) {
        return utilisateurRepository.findById(id).orElse(null);
    }

    // UPDATE USER
    public Utilisateur update(Long id, Utilisateur newUser) {
        return utilisateurRepository.findById(id).map(u -> {

            u.setNom(newUser.getNom());
            u.setEmail(newUser.getEmail());
            u.setAdresse(newUser.getAdresse());
            u.setTelephone(newUser.getTelephone());

            // Charger nouveau rôle
            Role r = roleRepository.findById(newUser.getRole().getId())
                    .orElseThrow(() -> new RuntimeException("Role introuvable"));
            u.setRole(r);

            boolean estLivreur = r.getRole().equalsIgnoreCase("LIVREUR");

            if (estLivreur) {
                u.setDisponibilite(newUser.getDisponibilite());
            } else {
                u.setDisponibilite(null);
            }

            if (newUser.getMotDePasse() != null && !newUser.getMotDePasse().isBlank()) {
                u.setMotDePasse(passwordEncoder.encode(newUser.getMotDePasse()));
            }

            return utilisateurRepository.save(u);
        }).orElse(null);
    }

    public boolean delete(Long id) {
        if (utilisateurRepository.existsById(id)) {
            utilisateurRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
