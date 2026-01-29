package com.dualexpress.controller;

import com.dualexpress.dto.PaiementDTO;
import com.dualexpress.dto.request.PaiementRequest;
import com.dualexpress.service.PaiementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/paiements")
@RequiredArgsConstructor
public class PaiementController {

    private final PaiementService service;

    @PostMapping
    public ResponseEntity<PaiementDTO> payer(@Valid @RequestBody PaiementRequest req) {
        return ResponseEntity.ok(service.payer(req));
    }
}