
package com.dualexpress.mapper;

import com.dualexpress.dto.ProduitDTO;
import com.dualexpress.model.Produit;

public class ProduitMapper {

    public static ProduitDTO toDTO(Produit p) {
        return ProduitDTO.builder()
                .id(p.getId())
                .nom(p.getNom())
                .description(p.getDescription())
                .prix(p.getPrix())
                .categorie(p.getCategorie().toString())
                .disponible(p.getDisponible())
                .restaurantId(p.getRestaurant().getId())
                .build();
    }
}
