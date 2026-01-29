package com.dualexpress.mapper;

import com.dualexpress.dto.CommandeDTO;
import com.dualexpress.model.Commande;

import java.util.Collections;
import java.util.stream.Collectors;

public class CommandeMapper {

    public static CommandeDTO toDTO(Commande c) {
        return CommandeDTO.builder()
                .id(c.getId())
                .dateCommande(c.getDateCommande())
                .statut(c.getStatut().name())
                .montantTotal(c.getMontantTotal())
                .fraisLivraison(c.getFraisLivraison())
                .adresseLivraison(c.getAdresseLivraison())
                .utilisateurId(c.getUtilisateur() != null ? c.getUtilisateur().getId() : null)
                .restaurantId(c.getRestaurant() != null ? c.getRestaurant().getId() : null)
                .lignes(
                        c.getLignes() == null ? Collections.emptyList() :
                                c.getLignes().stream()
                                        .map(LigneCommandeMapper::toDTO)
                                        .collect(Collectors.toList())
                )
                .build();
    }
}