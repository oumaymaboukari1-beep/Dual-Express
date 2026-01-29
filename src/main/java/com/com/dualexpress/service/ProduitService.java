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
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProduitService {

    private final ProduitRepository repo;
    private final RestaurantRepository restaurantRepo;

    public ProduitDTO create(ProduitRequest req) {

        Restaurant r = restaurantRepo.findById(req.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant introuvable"));

        Categorie cat;
        try {
            cat = Categorie.valueOf(req.getCategorie().toUpperCase(Locale.ROOT));
        } catch (Exception e) {
            throw new RuntimeException("Catégorie invalide: " + req.getCategorie());
        }

        Produit p = Produit.builder()
                .nom(req.getNom())
                .description(req.getDescription())
                .prix(req.getPrix()) // BigDecimal ✅
                .categorie(cat)
                .disponible(req.getDisponible())
                .restaurant(r)
                .build();

        repo.save(p);
        return ProduitMapper.toDTO(p);
    }

    public List<ProduitDTO> getAll() {
        // ✅ compatible Java 8/11
        return repo.findAll().stream()
                .map(ProduitMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<ProduitDTO> getByCategorie(String cat) {
        Categorie categorie;
        try {
            categorie = Categorie.valueOf(cat.toUpperCase(Locale.ROOT));
        } catch (Exception e) {
            throw new RuntimeException("Catégorie invalide: " + cat);
        }

        return repo.findByCategorie(categorie)
                .stream()
                .map(ProduitMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<ProduitDTO> getDisponibles() {
        return repo.findByDisponibleTrue().stream()
                .map(ProduitMapper::toDTO)
                .collect(Collectors.toList());
    }

    // ✅ endpoints utiles pour React (restaurant dashboard)
    public List<ProduitDTO> getByRestaurant(Long restaurantId) {
        return repo.findByRestaurantId(restaurantId).stream()
                .map(ProduitMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<ProduitDTO> getDisponiblesByRestaurant(Long restaurantId) {
        return repo.findByRestaurantIdAndDisponibleTrue(restaurantId).stream()
                .map(ProduitMapper::toDTO)
                .collect(Collectors.toList());
    }
}
