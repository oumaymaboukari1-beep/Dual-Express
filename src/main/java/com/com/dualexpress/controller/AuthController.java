
package com.dualexpress.controller;

import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.UtilisateurRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestParam String email,
            @RequestParam String password
    ) {
        Utilisateur u = utilisateurRepository.findByEmail(email)
                .orElse(null);

        if (u == null) {
            return ResponseEntity.status(401).body("Email incorrect");
        }

        if (!passwordEncoder.matches(password, u.getMotDePasse())) {
            return ResponseEntity.status(401).body("Mot de passe incorrect");
        }

        return ResponseEntity.ok("Connexion réussie !");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Utilisateur user) {

        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        utilisateurRepository.save(user);

        return ResponseEntity.ok("Utilisateur créé !");
    }
}
