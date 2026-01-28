package com.dualexpress.mapper;

import com.dualexpress.dto.CommandeDTO;
import com.dualexpress.model.Commande;

import java.util.stream.Collectors;

public class CommandeMapper {

    public static CommandeDTO toDTO(Commande c) {
        return CommandeDTO.builder()
                .id(c.getId())
                .dateCommande(c.getDateCommande())
                .statut(c.getStatut().toString())
                .montantTotal(c.getMontantTotal())
                .adresseLivraison(c.getAdresseLivraison())
                .utilisateurId(c.getUtilisateur().getId())
                .restaurantId(c.getRestaurant().getId())
                .lignes(
                        c.getLignes().stream()
                                .map(LigneCommandeMapper::toDTO)
                                .collect(Collectors.toList())
                )
                .build();
    }
}