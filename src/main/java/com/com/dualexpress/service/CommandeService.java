package com.dualexpress.service;

import com.dualexpress.dto.CommandeDTO;
import com.dualexpress.dto.request.CommandeRequest;
import com.dualexpress.dto.request.LigneCommandeRequest;
import com.dualexpress.mapper.CommandeMapper;
import com.dualexpress.model.*;
import com.dualexpress.model.enums.StatutCommande;
import com.dualexpress.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommandeService {

    private final CommandeRepository repo;
    private final UtilisateurRepository utilisateurRepo;
    private final RestaurantRepository restaurantRepo;
    private final ProduitRepository produitRepo;

    // ✅ configurable via application.properties
    @Value("${dualexpress.delivery.fee:7.00}")
    private BigDecimal deliveryFee;

    @Transactional
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
                .fraisLivraison(deliveryFee)
                .montantTotal(BigDecimal.ZERO) // sera recalculé
                .build();

        // ✅ ajouter les lignes si présentes
        List<LigneCommandeRequest> lignesReq = req.getLignes();
        if (lignesReq != null && !lignesReq.isEmpty()) {
            for (LigneCommandeRequest lr : lignesReq) {
                Produit produit = produitRepo.findById(lr.getProduitId())
                        .orElseThrow(() -> new RuntimeException("Produit introuvable: " + lr.getProduitId()));

                LigneCommande lc = LigneCommande.builder()
                        .commande(c)
                        .produit(produit)
                        .quantite(lr.getQuantite())
                        .prixUnitaire(produit.getPrix()) // ✅ doit être BigDecimal si possible
                        .build();

                c.getLignes().add(lc);
            }
        }

        // ✅ recalcul total (somme lignes + frais livraison)
        c.recalculerEtMajTotal();

        // cascade ALL sur lignes => repo.save(c) sauve commande + lignes
        Commande saved = repo.save(c);

        return CommandeMapper.toDTO(saved);
    }

    public CommandeDTO getById(Long id) {
        return repo.findById(id)
                .map(CommandeMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));
    }
}