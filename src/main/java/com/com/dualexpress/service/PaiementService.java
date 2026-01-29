package com.dualexpress.service;

import com.dualexpress.dto.PaiementDTO;
import com.dualexpress.dto.request.PaiementRequest;
import com.dualexpress.mapper.PaiementMapper;
import com.dualexpress.model.Commande;
import com.dualexpress.model.Paiement;
import com.dualexpress.model.enums.StatutPaiement;
import com.dualexpress.repository.CommandeRepository;
import com.dualexpress.repository.PaiementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class PaiementService {

    private final PaiementRepository repo;
    private final CommandeRepository commandeRepo;

    @Transactional
    public PaiementDTO payer(PaiementRequest req) {

        Commande c = commandeRepo.findById(req.getCommandeId())
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));

        // Empêcher double paiement validé
        if (repo.existsByCommandeIdAndStatut(c.getId(), StatutPaiement.VALIDE)) {
            throw new RuntimeException("Commande déjà payée");
        }

        StatutPaiement statut = switch (req.getMethodePaiement()) {
            case ESPECE -> StatutPaiement.EN_ATTENTE;
            case CARTE_BANCAIRE, CARTE_SODEXO -> StatutPaiement.VALIDE; // simulation OK
        };

        Paiement p = Paiement.builder()
                .commande(c)
                .datePaiement(new Date())
                .montant(c.getMontantTotal())       // ✅ BigDecimal attendu
                .methodePaiement(req.getMethodePaiement())
                .statut(statut)
                .build();

        p = repo.save(p);

        // si Commande a un champ paiement, on le met à jour
        c.setPaiement(p);

        // commandeRepo.save(c); // optionnel si relation + cascade correctes
        commandeRepo.save(c);

        return PaiementMapper.toDTO(p);
    }
}