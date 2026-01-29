package com.dualexpress.controller;

import com.dualexpress.dto.LigneCommandeDTO;
import com.dualexpress.dto.request.LigneCommandeRequest;
import com.dualexpress.service.LigneCommandeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lignes")
@RequiredArgsConstructor
public class LigneCommandeController {

    private final LigneCommandeService service;

    @PostMapping("/{commandeId}")
    public ResponseEntity<LigneCommandeDTO> addLigne(
            @PathVariable Long commandeId,
            @Valid @RequestBody LigneCommandeRequest req) {

        return ResponseEntity.ok(service.ajouterLigne(commandeId, req));
    }
}
