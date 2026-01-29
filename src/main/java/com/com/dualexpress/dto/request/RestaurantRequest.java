package com.dualexpress.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantRequest {

    @NotBlank
    private String nomRestaurant;

    @NotBlank
    private String adresse;

    @NotBlank
    private String telephone;

    @Email
    private String email;

    private String horairesOuverture;
    private String description;

    // optional: rating peut être null au début
    private Double rating;

    private String imageUrl;
}