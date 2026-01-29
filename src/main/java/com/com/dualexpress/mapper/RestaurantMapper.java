package com.dualexpress.mapper;

import com.dualexpress.dto.RestaurantDTO;
import com.dualexpress.dto.request.RestaurantRequest;
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

    public static Restaurant fromRequest(RestaurantRequest req) {
        return Restaurant.builder()
                .nomRestaurant(req.getNomRestaurant())
                .adresse(req.getAdresse())
                .telephone(req.getTelephone())
                .email(req.getEmail())
                .horairesOuverture(req.getHorairesOuverture())
                .description(req.getDescription())
                .rating(req.getRating() == null ? 0.0 : req.getRating())
                .imageUrl(req.getImageUrl())
                .build();
    }
}