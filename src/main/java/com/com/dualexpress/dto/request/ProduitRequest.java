package com.dualexpress.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProduitRequest {

    @NotBlank
    private String nom;

    private String description;

    @NotNull
    @DecimalMin(value = "0.00", inclusive = false)
    private BigDecimal prix;

    @NotBlank
    private String categorie; // ex: "PIZZA", "BURGER" ...

    @NotNull
    private Boolean disponible;

    @NotNull
    private Long restaurantId;
}
