
package com.dualexpress.controller;

import com.dualexpress.model.Utilisateur;
import com.dualexpress.service.UtilisateurService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utilisateurs")
@RequiredArgsConstructor
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    @PostMapping
    public ResponseEntity<Utilisateur> create(@RequestBody Utilisateur utilisateur) {
        return ResponseEntity.ok(utilisateurService.create(utilisateur));
    }

    @GetMapping
    public ResponseEntity<List<Utilisateur>> getAll() {
        return ResponseEntity.ok(utilisateurService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Utilisateur> getById(@PathVariable Long id) {
        return ResponseEntity.ok(utilisateurService.getById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> update(@PathVariable Long id, @RequestBody Utilisateur data) {
        return ResponseEntity.ok(utilisateurService.update(id, data));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestParam String email, @RequestParam String password) {
        return ResponseEntity.ok(utilisateurService.authentifier(email, password));
    }
}
