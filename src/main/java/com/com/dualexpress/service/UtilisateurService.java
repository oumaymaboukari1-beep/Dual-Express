package com.dualexpress.service;

import com.dualexpress.dto.AuthDtos.RegisterRequest;
import com.dualexpress.model.Role;
import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.RoleRepository;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public String register(RegisterRequest req) {

        if (utilisateurRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email déjà utilisé !");
        }
        if (utilisateurRepository.existsByUsername(req.getUsername())) {
            throw new RuntimeException("Username déjà pris !");
        }

        Set<Role> roles = (req.getRoles() == null || req.getRoles().isEmpty())
                ? Set.of(getOrCreateRole("CLIENT"))
                : req.getRoles().stream().map(this::getOrCreateRole).collect(Collectors.toSet());

        Utilisateur u = Utilisateur.builder()
                .username(req.getUsername())
                .password(passwordEncoder.encode(req.getPassword()))
                .email(req.getEmail())
                .fullName(req.getFullName())
                .roles(roles)
                .enabled(true)
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .build();

        utilisateurRepository.save(u);
        return "Inscription réussie";
    }

    private Role getOrCreateRole(String roleName) {
        return roleRepository.findByRole(roleName)
                .orElseGet(() -> roleRepository.save(Role.builder().role(roleName).build()));
    }
}