package com.dualexpress.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LigneCommandeRequest {

    @NotNull
    private Long produitId;

    @NotNull
    @Min(1)
    private Integer quantite;
}