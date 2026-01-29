package com.dualexpress.dto.request;

import com.dualexpress.model.enums.MethodePaiement;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PaiementRequest {

    @NotNull
    private Long commandeId;

    @NotNull
    private MethodePaiement methodePaiement;
}