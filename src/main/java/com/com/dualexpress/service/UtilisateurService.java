
package com.dualexpress.service;

import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    //  AUTHENTIFICATION (déjà ok)
    public boolean authentifier(String email, String password) {
        return utilisateurRepository.findByEmail(email)
                .map(u -> passwordEncoder.matches(password, u.getMotDePasse()))
                .orElse(false);
    }

    //  CREATE
    public Utilisateur create(Utilisateur utilisateur) {
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
        return utilisateurRepository.save(utilisateur);
    }

    // GET ALL
    public List<Utilisateur> getAll() {
        return utilisateurRepository.findAll();
    }

    //  GET BY ID
    public Utilisateur getById(Long id) {
        return utilisateurRepository.findById(id)
                .orElse(null);
    }


    public Utilisateur update(Long id, Utilisateur newUser) {
        return utilisateurRepository.findById(id).map(u -> {

            u.setNom(newUser.getNom());
            u.setEmail(newUser.getEmail());
            u.setAdresse(newUser.getAdresse());
            u.setTelephone(newUser.getTelephone());
            u.setDisponibilite(newUser.getDisponibilite());
            u.setRole(newUser.getRole());

            // UPDATE PASSWORD IF CHANGED
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
