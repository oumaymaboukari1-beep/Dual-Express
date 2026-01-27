
package com.dualexpress.mapper;

import com.dualexpress.dto.LigneCommandeDTO;
import com.dualexpress.model.LigneCommande;

public class LigneCommandeMapper {

    public static LigneCommandeDTO toDTO(LigneCommande lc) {
        return LigneCommandeDTO.builder()
                .id(lc.getId())
                .quantite(lc.getQuantite())
                .prixUnitaire(lc.getPrixUnitaire())
                .produitId(lc.getProduit().getId())
                .build();
    }
}
