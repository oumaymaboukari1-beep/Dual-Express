
package com.dualexpress.controller;

import com.dualexpress.model.Produit;
import com.dualexpress.model.enums.Categorie;
import com.dualexpress.service.ProduitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produits")
@RequiredArgsConstructor
public class ProduitController {

    private final ProduitService produitService;

    @PostMapping
    public ResponseEntity<Produit> create(@RequestBody Produit p) {
        return ResponseEntity.ok(produitService.create(p));
    }

    @GetMapping
    public ResponseEntity<List<Produit>> getAll() {
        return ResponseEntity.ok(produitService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getById(@PathVariable Long id) {
        return ResponseEntity.ok(produitService.getById(id));
    }

    @GetMapping("/disponibles")
    public ResponseEntity<List<Produit>> getDisponibles() {
        return ResponseEntity.ok(produitService.getDisponibles());
    }

    @GetMapping("/categorie/{cat}")
    public ResponseEntity<List<Produit>> getByCategorie(@PathVariable Categorie cat) {
        return ResponseEntity.ok(produitService.getByCategorie(cat));
    }
}
