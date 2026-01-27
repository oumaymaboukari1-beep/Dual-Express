
package com.dualexpress.dto.request;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommandeRequest {

    private Long utilisateurId;
    private Long restaurantId;
    private String adresseLivraison;

    private List<LigneCommandeRequest> lignes;
}
