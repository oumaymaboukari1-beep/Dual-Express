package com.dualexpress.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommandeRequest {

    @NotNull
    private Long utilisateurId;

    @NotNull
    private Long restaurantId;

    @NotBlank
    private String adresseLivraison;

    private List<LigneCommandeRequest> lignes;
}