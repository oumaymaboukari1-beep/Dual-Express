
package com.dualexpress.controller;

import com.dualexpress.model.Paiement;
import com.dualexpress.service.PaiementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/paiements")
@RequiredArgsConstructor
public class PaiementController {

    private final PaiementService paiementService;

    @PostMapping("/{id}/payer")
    public ResponseEntity<Paiement> effectuerPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(paiementService.effectuerPaiement(id));
    }
}
