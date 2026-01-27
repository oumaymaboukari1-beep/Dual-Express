
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

import java.util.Date;

@Service
@RequiredArgsConstructor
public class PaiementService {

    private final PaiementRepository repo;
    private final CommandeRepository commandeRepo;

    public PaiementDTO payer(PaiementRequest req) {

        Commande c = commandeRepo.findById(req.getCommandeId())
                .orElseThrow(() -> new RuntimeException("Commande introuvable"));

        Paiement p = Paiement.builder()
                .commande(c)
                .datePaiement(new Date())
                .montant(c.getMontantTotal())
                .methodePaiement(req.getMethodePaiement())
                .statut(StatutPaiement.VALIDE) // simple logique
                .build();

        repo.save(p);

        c.setPaiement(p);
        commandeRepo.save(c);

        return PaiementMapper.toDTO(p);
    }
}
