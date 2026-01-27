
package com.dualexpress.service;

import com.dualexpress.dto.ProduitDTO;
import com.dualexpress.dto.request.ProduitRequest;
import com.dualexpress.mapper.ProduitMapper;
import com.dualexpress.model.Produit;
import com.dualexpress.model.Restaurant;
import com.dualexpress.model.enums.Categorie;
import com.dualexpress.repository.ProduitRepository;
import com.dualexpress.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProduitService {

    private final ProduitRepository repo;
    private final RestaurantRepository restaurantRepo;

    public ProduitDTO create(ProduitRequest req) {

        Restaurant r = restaurantRepo.findById(req.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant introuvable"));

        Produit p = Produit.builder()
                .nom(req.getNom())
                .description(req.getDescription())
                .prix(req.getPrix())
                .categorie(Categorie.valueOf(req.getCategorie()))
                .disponible(req.getDisponible())
                .restaurant(r)
                .build();

        repo.save(p);
        return ProduitMapper.toDTO(p);
    }

    public List<ProduitDTO> getAll() {
        return repo.findAll().stream()
                .map(ProduitMapper::toDTO)
                .toList();
    }

    public List<ProduitDTO> getByCategorie(String cat) {
        return repo.findByCategorie(Categorie.valueOf(cat))
                .stream().map(ProduitMapper::toDTO)
                .toList();
    }

    public List<ProduitDTO> getDisponibles() {
        return repo.findByDisponibleTrue().stream()
                .map(ProduitMapper::toDTO)
                .toList();
    }
}
