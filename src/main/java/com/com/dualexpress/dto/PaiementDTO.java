package com.dualexpress.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
public class PaiementDTO {
    private Long id;
    private BigDecimal montant;
    private Date datePaiement;
    private String statut;
    private String methodePaiement;
    private Long commandeId;
}