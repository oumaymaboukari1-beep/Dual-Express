
package com.dualexpress.controller;

import com.dualexpress.model.Restaurant;
import com.dualexpress.model.Produit;
import com.dualexpress.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Restaurant> create(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.create(restaurant));
    }

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAll() {
        return ResponseEntity.ok(restaurantService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getById(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getById(id));
    }

    @PostMapping("/{id}/produits")
    public ResponseEntity<Void> addProduit(@PathVariable Long id, @RequestBody Produit produit) {
        restaurantService.ajouterProduit(id, produit);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/produits/{produitId}")
    public ResponseEntity<Void> removeProduit(@PathVariable Long id, @PathVariable Long produitId) {
        restaurantService.supprimerProduit(id, produitId);
        return ResponseEntity.ok().build();
    }
}
