
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

@Service
@RequiredArgsConstructor
public class LigneCommandeService {

    private final LigneCommandeRepository repo;
    private final ProduitRepository produitRepo;
    private final CommandeRepository commandeRepo;

    public LigneCommandeDTO ajouterLigne(Long commandeId, LigneCommandeRequest req) {

        Commande c = commandeRepo.findById(commandeId)
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));

        Produit p = produitRepo.findById(req.getProduitId())
                .orElseThrow(() -> new RuntimeException("Produit introuvable"));

        LigneCommande lc = LigneCommande.builder()
                .commande(c)
                .produit(p)
                .quantite(req.getQuantite())
                .prixUnitaire(p.getPrix())
                .build();

        repo.save(lc);

        c.getLignes().add(lc);
        c.setMontantTotal(c.calculerTotal());
        commandeRepo.save(c);

        return LigneCommandeMapper.toDTO(lc);
    }
}
