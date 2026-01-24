
package com.dualexpress.controller;

import com.dualexpress.model.Commande;
import com.dualexpress.model.LigneCommande;
import com.dualexpress.service.CommandeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/commandes")
@RequiredArgsConstructor
public class CommandeController {

    private final CommandeService commandeService;

    @PostMapping("/create")
    public ResponseEntity<Commande> create(
            @RequestParam Long userId,
            @RequestParam Long restaurantId,
            @RequestBody Commande commande
    ) {
        return ResponseEntity.ok(commandeService.create(userId, restaurantId, commande));
    }

    @PostMapping("/{id}/lignes")
    public ResponseEntity<LigneCommande> addLigne(
            @PathVariable Long id,
            @RequestBody LigneCommande lc
    ) {
        return ResponseEntity.ok(commandeService.ajouterLigne(id, lc));
    }

    @PostMapping("/{id}/valider")
    public ResponseEntity<Commande> valider(@PathVariable Long id) {
        return ResponseEntity.ok(commandeService.valider(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Commande> getById(@PathVariable Long id) {
        return ResponseEntity.ok(commandeService.getById(id));
    }
}
