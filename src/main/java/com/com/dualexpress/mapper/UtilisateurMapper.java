
package com.dualexpress.mapper;

import com.dualexpress.dto.UtilisateurDTO;
import com.dualexpress.model.Utilisateur;

public class UtilisateurMapper {

    public static UtilisateurDTO toDTO(Utilisateur u) {
        return UtilisateurDTO.builder()
                .id(u.getId())
                .nom(u.getNom())
                .email(u.getEmail())
                .telephone(u.getTelephone())
                .adresse(u.getAdresse())
                .role(u.getRole().getRole())
                .disponibilite(u.getDisponibilite())
                .build();
    }
}
