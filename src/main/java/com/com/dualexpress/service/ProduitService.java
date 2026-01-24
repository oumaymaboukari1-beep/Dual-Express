
package com.dualexpress.service;

import com.dualexpress.model.Produit;
import com.dualexpress.model.enums.Categorie;
import com.dualexpress.repository.ProduitRepository;
import com.dualexpress.service.exceptions.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProduitService {

    private final ProduitRepository produitRepository;

    public Produit create(Produit p) {
        return produitRepository.save(p);
    }

    public List<Produit> getAll() {
        return produitRepository.findAll();
    }

    public Produit getById(Long id) {
        return produitRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produit introuvable"));
    }

    public List<Produit> getDisponibles() {
        return produitRepository.findByDisponibleTrue();
    }

    public List<Produit> getByCategorie(Categorie categorie) {
        return produitRepository.findByCategorie(categorie);
    }
}
