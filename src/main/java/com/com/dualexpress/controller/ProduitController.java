package com.dualexpress.controller;

import com.dualexpress.dto.ProduitDTO;
import com.dualexpress.dto.request.ProduitRequest;
import com.dualexpress.service.ProduitService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produits")
@RequiredArgsConstructor
public class ProduitController {

    private final ProduitService service;

    @PostMapping
    public ResponseEntity<ProduitDTO> create(@Valid @RequestBody ProduitRequest req) {
        return ResponseEntity.ok(service.create(req));
    }

    @GetMapping
    public ResponseEntity<List<ProduitDTO>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/categorie/{cat}")
    public ResponseEntity<List<ProduitDTO>> getByCat(@PathVariable String cat) {
        return ResponseEntity.ok(service.getByCategorie(cat));
    }

    @GetMapping("/disponibles")
    public ResponseEntity<List<ProduitDTO>> getDisp() {
        return ResponseEntity.ok(service.getDisponibles());
    }

    // ✅ pour afficher les produits d’un resto dans React
    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<ProduitDTO>> getByRestaurant(@PathVariable Long restaurantId) {
        return ResponseEntity.ok(service.getByRestaurant(restaurantId));
    }

    // ✅ pour afficher uniquement les produits disponibles d’un resto
    @GetMapping("/restaurant/{restaurantId}/disponibles")
    public ResponseEntity<List<ProduitDTO>> getDisponiblesByRestaurant(@PathVariable Long restaurantId) {
        return ResponseEntity.ok(service.getDisponiblesByRestaurant(restaurantId));
    }
}
