
package com.dualexpress.service;

import com.dualexpress.model.Paiement;
import com.dualexpress.model.enums.StatutPaiement;
import com.dualexpress.repository.PaiementRepository;
import com.dualexpress.service.exceptions.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaiementService {

    private final PaiementRepository paiementRepository;

    public Paiement effectuerPaiement(Long paiementId) {
        Paiement paiement = paiementRepository.findById(paiementId)
                .orElseThrow(() -> new ResourceNotFoundException("Paiement introuvable"));

        paiement.effectuerPaiement();

        return paiementRepository.save(paiement);
    }
}
