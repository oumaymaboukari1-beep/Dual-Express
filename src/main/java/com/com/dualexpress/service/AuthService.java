
package com.dualexpress.service;

import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.UtilisateurRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    public Utilisateur login(String email, String motDePasse) {

        Utilisateur user = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email incorrect"));

        if (!passwordEncoder.matches(motDePasse, user.getMotDePasse())) {
            throw new RuntimeException("Mot de passe incorrect");
        }

        return user; // SUCCESS
    }
}
