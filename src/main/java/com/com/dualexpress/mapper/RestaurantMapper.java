
package com.dualexpress.mapper;

import com.dualexpress.dto.RestaurantDTO;
import com.dualexpress.model.Restaurant;

public class RestaurantMapper {

    public static RestaurantDTO toDTO(Restaurant r) {
        if (r == null) return null;

        return RestaurantDTO.builder()
                .id(r.getId())
                .nomRestaurant(r.getNomRestaurant())
                .adresse(r.getAdresse())
                .telephone(r.getTelephone())
                .email(r.getEmail())
                .horairesOuverture(r.getHorairesOuverture())
                .description(r.getDescription())
                .rating(r.getRating())
                .imageUrl(r.getImageUrl())
                .build();
    }
}
