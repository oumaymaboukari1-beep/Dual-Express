package com.dualexpress.service;

import com.dualexpress.dto.AuthDtos.RegisterRequest;
import com.dualexpress.dto.AuthDtos.MeResponse;
import com.dualexpress.model.Role;
import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.RoleRepository;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UtilisateurRepository userRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder encoder;

    public void register(RegisterRequest req) {

        if (userRepo.existsByUsername(req.getUsername())) {
            throw new RuntimeException("Username déjà pris");
        }

        if (req.getEmail() != null && userRepo.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email déjà utilisé");
        }

        Set<Role> roles =
                (req.getRoles() == null || req.getRoles().isEmpty())
                        ? Set.of(getOrCreateRole("CLIENT"))
                        : req.getRoles().stream()
                        .map(this::getOrCreateRole)
                        .collect(Collectors.toSet());

        Utilisateur u = Utilisateur.builder()
                .username(req.getUsername())
                .password(encoder.encode(req.getPassword()))
                .email(req.getEmail())
                .fullName(req.getFullName())
                .roles(roles)
                .enabled(true)
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .build();

        userRepo.save(u);
    }

    private Role getOrCreateRole(String name) {
        return roleRepo.findByRole(name)
                .orElseGet(() -> roleRepo.save(Role.builder().role(name).build()));
    }

    public MeResponse toMe(Utilisateur u) {
        return MeResponse.builder()
                .id(u.getId())
                .username(u.getUsername())
                .email(u.getEmail())
                .fullName(u.getFullName())
                .roles(u.getRoles().stream().map(Role::getRole).collect(Collectors.toSet()))
                .build();
    }
}