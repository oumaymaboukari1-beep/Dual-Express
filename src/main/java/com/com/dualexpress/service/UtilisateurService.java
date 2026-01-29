package com.dualexpress.service;

import com.dualexpress.dto.UtilisateurDTO;
import com.dualexpress.dto.request.LoginRequest;
import com.dualexpress.dto.request.RegisterRequest;
import com.dualexpress.dto.response.LoginResponse;
import com.dualexpress.mapper.UtilisateurMapper;
import com.dualexpress.model.Role;
import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.RoleRepository;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final RoleRepository roleRepository;

    /* ---------- REGISTER ---------- */
    public String register(RegisterRequest req) {

        if (utilisateurRepository.findByEmail(req.getEmail()).isPresent()) {
            throw new RuntimeException("Email déjà utilisé !");
        }

        Role role = roleRepository.findById(req.getRoleId())
                .orElseThrow(() -> new RuntimeException("Rôle introuvable"));

        Utilisateur user = Utilisateur.builder()
                .nom(req.getNom())
                .email(req.getEmail())
                .motDePasse(req.getMotDePasse()) // PAS CRYPTÉ
                .telephone(req.getTelephone())
                .adresse(req.getAdresse())
                .role(role)
                .disponibilite(
                        role.getRole().equalsIgnoreCase("LIVREUR")
                )
                .build();

        utilisateurRepository.save(user);

        return "Utilisateur créé avec succès";
    }

    /* ---------- LOGIN ---------- */
    public LoginResponse login(LoginRequest req) {

        Utilisateur user = utilisateurRepository
                .findByEmailAndMotDePasse(req.getEmail(), req.getMotDePasse())
                .orElseThrow(() -> new RuntimeException("Email ou mot de passe incorrect"));

        return LoginResponse.builder()
                .id(user.getId())
                .nom(user.getNom())
                .role(user.getRole().getRole()) // ADMIN / CLIENT / RESTAURANT / LIVREUR
                .build();
    }

    /* ---------- GET ALL USERS ---------- */
    public List<UtilisateurDTO> getAll() {
        return utilisateurRepository.findAll()
                .stream()
                .map(UtilisateurMapper::toDTO)
                .toList();
    }

    /* ---------- GET USER BY ID ---------- */
    public UtilisateurDTO getById(Long id) {
        Utilisateur u = utilisateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        return UtilisateurMapper.toDTO(u);
    }
}