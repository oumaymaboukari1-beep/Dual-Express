
package com.dualexpress.service;

import com.dualexpress.model.*;
import com.dualexpress.model.enums.StatutCommande;
import com.dualexpress.repository.*;
import com.dualexpress.service.exceptions.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class CommandeService {

    private final CommandeRepository commandeRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final RestaurantRepository restaurantRepository;
    private final LigneCommandeRepository ligneCommandeRepository;

    public Commande create(Long userId, Long restaurantId, Commande commande) {

        Utilisateur u = utilisateurRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur introuvable"));

        Restaurant r = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new ResourceNotFoundException("Restaurant introuvable"));

        commande.setUtilisateur(u);
        commande.setRestaurant(r);
        commande.setDateCommande(new Date());
        commande.setStatut(StatutCommande.EN_COURS);

        return commandeRepository.save(commande);
    }

    public LigneCommande ajouterLigne(Long commandeId, LigneCommande lc) {
        Commande c = commandeRepository.findById(commandeId)
                .orElseThrow(() -> new ResourceNotFoundException("Commande introuvable"));

        lc.setCommande(c);

        ligneCommandeRepository.save(lc);

        c.getLignes().add(lc);
        c.setMontantTotal(c.calculerTotal());

        commandeRepository.save(c);

        return lc;
    }

    public Commande valider(Long id) {
        Commande c = getById(id);
        c.validerCommande();
        return commandeRepository.save(c);
    }

    public Commande getById(Long id) {
        return commandeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Commande introuvable"));
    }
}
