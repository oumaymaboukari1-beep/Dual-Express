
package com.dualexpress.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LigneCommandeRequest {

    private Long produitId;
    private Integer quantite;
}
