
package com.dualexpress.service;

import com.dualexpress.model.*;
import com.dualexpress.repository.*;
import com.dualexpress.service.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;

    public Utilisateur create(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    public List<Utilisateur> getAll() {
        return utilisateurRepository.findAll();
    }

    public Utilisateur getById(Long id) {
        return utilisateurRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur introuvable"));
    }

    public Utilisateur update(Long id, Utilisateur data) {
        Utilisateur u = getById(id);

        u.setNom(data.getNom());
        u.setAdresse(data.getAdresse());
        u.setTelephone(data.getTelephone());
        u.setEmail(data.getEmail());

        return utilisateurRepository.save(u);
    }

    public boolean authentifier(String email, String password) {
        return utilisateurRepository.findByEmail(email)
                .map(u -> u.authentifier(email, password))
                .orElse(false);
    }
}
