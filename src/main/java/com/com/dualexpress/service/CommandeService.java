
package com.dualexpress.service;

import com.dualexpress.dto.CommandeDTO;
import com.dualexpress.dto.request.CommandeRequest;
import com.dualexpress.mapper.CommandeMapper;
import com.dualexpress.model.*;
import com.dualexpress.model.enums.StatutCommande;
import com.dualexpress.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class CommandeService {

    private final CommandeRepository repo;
    private final UtilisateurRepository utilisateurRepo;
    private final RestaurantRepository restaurantRepo;
    private final LigneCommandeRepository ligneRepo;

    public CommandeDTO create(CommandeRequest req) {

        Utilisateur user = utilisateurRepo.findById(req.getUtilisateurId())
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        Restaurant rest = restaurantRepo.findById(req.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant introuvable"));

        Commande c = Commande.builder()
                .dateCommande(new Date())
                .statut(StatutCommande.EN_COURS)
                .adresseLivraison(req.getAdresseLivraison())
                .restaurant(rest)
                .utilisateur(user)
                .montantTotal(7.0) // frais de livraison
                .build();

        repo.save(c);

        return CommandeMapper.toDTO(c);
    }

    public CommandeDTO getById(Long id) {
        return repo.findById(id)
                .map(CommandeMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));
    }
}
