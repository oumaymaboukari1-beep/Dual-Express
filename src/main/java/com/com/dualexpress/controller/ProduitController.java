
package com.dualexpress.controller;

import com.dualexpress.dto.ProduitDTO;
import com.dualexpress.dto.request.ProduitRequest;
import com.dualexpress.service.ProduitService;
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
    public ResponseEntity<ProduitDTO> create(@RequestBody ProduitRequest req) {
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
}
