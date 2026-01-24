
package com.dualexpress.service;

import com.dualexpress.model.LigneCommande;
import com.dualexpress.repository.LigneCommandeRepository;
import com.dualexpress.service.exceptions.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LigneCommandeService {

    private final LigneCommandeRepository ligneCommandeRepository;

    // ----------- LIST ALL -----------
    public List<LigneCommande> all() {
        return ligneCommandeRepository.findAll();
    }

    // ----------- ADD -----------
    public LigneCommande add(LigneCommande lc) {
        return ligneCommandeRepository.save(lc);
    }

    // ----------- DELETE -----------
    public void delete(Long id) {
        LigneCommande lc = ligneCommandeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("LigneCommande introuvable : " + id));

        ligneCommandeRepository.delete(lc);
    }
}
