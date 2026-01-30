package com.dualexpress.controller;

import com.dualexpress.dto.UtilisateurDTO;
import com.dualexpress.mapper.UtilisateurMapper;
import com.dualexpress.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UtilisateurController {

    private final UtilisateurRepository utilisateurRepository;

    @GetMapping
    public ResponseEntity<?> getAll() {
        var list = utilisateurRepository.findAll()
                .stream()
                .map(UtilisateurMapper::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        var u = utilisateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        return ResponseEntity.ok(UtilisateurMapper.toDTO(u));
    }
}