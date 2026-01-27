
package com.dualexpress.dto;

import lombok.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaiementDTO {

    private Long id;
    private Double montant;
    private Date datePaiement;
    private String statut;
    private String methodePaiement;
    private Long commandeId;
}
