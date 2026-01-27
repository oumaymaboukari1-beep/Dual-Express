
package com.dualexpress.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RestaurantDTO {

    private Long id;
    private String nomRestaurant;
    private String adresse;
    private String telephone;
    private String email;
    private String horairesOuverture;
    private String description;
    private Double rating;
    private String imageUrl;
}
