package com.dualexpress.controller;


import com.dualexpress.model.LigneCommande;
import com.dualexpress.service.LigneCommandeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lignes")
@CrossOrigin
public class LigneCommandeController {

    private final LigneCommandeService service;

    public LigneCommandeController(LigneCommandeService service) {
        this.service = service;
    }

    @GetMapping
    public List<LigneCommande> all() { return service.all(); }

    @PostMapping
    public LigneCommande add(@RequestBody LigneCommande lc) {
        return service.add(lc);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}

