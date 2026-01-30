package com.dualexpress.mapper;

import com.dualexpress.dto.UtilisateurDTO;
import com.dualexpress.model.Role;
import com.dualexpress.model.Utilisateur;

import java.util.stream.Collectors;

public class UtilisateurMapper {

    public static UtilisateurDTO toDTO(Utilisateur u) {
        if (u == null) return null;

        return UtilisateurDTO.builder()
                .id(u.getId())
                .username(u.getUsername())
                .email(u.getEmail())
                .fullName(u.getFullName())
                .roles(u.getRoles() == null ? null
                        : u.getRoles().stream().map(Role::getRole).collect(Collectors.toSet()))
                .enabled(u.isEnabled())
                .build();
    }
}