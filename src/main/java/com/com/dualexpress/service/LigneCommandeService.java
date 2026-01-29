package com.dualexpress.service;

import com.dualexpress.dto.LigneCommandeDTO;
import com.dualexpress.dto.request.LigneCommandeRequest;
import com.dualexpress.mapper.LigneCommandeMapper;
import com.dualexpress.model.Commande;
import com.dualexpress.model.LigneCommande;
import com.dualexpress.model.Produit;
import com.dualexpress.repository.CommandeRepository;
import com.dualexpress.repository.LigneCommandeRepository;
import com.dualexpress.repository.ProduitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LigneCommandeService {

    private final LigneCommandeRepository repo;
    private final ProduitRepository produitRepo;
    private final CommandeRepository commandeRepo;

    @Transactional
    public LigneCommandeDTO ajouterLigne(Long commandeId, LigneCommandeRequest req) {

        Commande c = commandeRepo.findById(commandeId)
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));

        Produit p = produitRepo.findById(req.getProduitId())
                .orElseThrow(() -> new RuntimeException("Produit introuvable"));

        LigneCommande lc = LigneCommande.builder()
                .commande(c)
                .produit(p)
                .quantite(req.getQuantite())
                .prixUnitaire(p.getPrix()) // BigDecimal ✅
                .build();

        // 1) save ligne
        repo.save(lc);

        // 2) attach to commande list
        c.getLignes().add(lc);

        // 3) recalc total (sum lignes + frais livraison)
        c.recalculerEtMajTotal();

        // 4) save commande
        commandeRepo.save(c);

        return LigneCommandeMapper.toDTO(lc);
    }
}