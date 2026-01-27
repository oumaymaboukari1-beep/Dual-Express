
package com.dualexpress.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaiementRequest {

    private Long commandeId;
    private String methodePaiement;
    // "CARTE_BANCAIRE", "PLUXEE", "ESPECE"
}
