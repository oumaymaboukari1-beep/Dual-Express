
package com.dualexpress.controller;

import com.dualexpress.dto.CommandeDTO;
import com.dualexpress.dto.request.CommandeRequest;
import com.dualexpress.service.CommandeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/commandes")
@RequiredArgsConstructor
public class CommandeController {

    private final CommandeService service;

    @PostMapping
    public ResponseEntity<CommandeDTO> create(@RequestBody CommandeRequest req) {
        return ResponseEntity.ok(service.create(req));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommandeDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }
}
