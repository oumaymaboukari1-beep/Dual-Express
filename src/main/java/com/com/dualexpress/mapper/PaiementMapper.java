
package com.dualexpress.mapper;

import com.dualexpress.dto.PaiementDTO;
import com.dualexpress.model.Paiement;

public class PaiementMapper {

    public static PaiementDTO toDTO(Paiement p) {
        return PaiementDTO.builder()
                .id(p.getId())
                .montant(p.getMontant())
                .datePaiement(p.getDatePaiement())
                .statut(p.getStatut().toString())
                .methodePaiement(p.getMethodePaiement())
                .commandeId(p.getCommande().getId())
                .build();
    }
}
