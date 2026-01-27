
package com.dualexpress.service;

import com.dualexpress.dto.RestaurantDTO;
import com.dualexpress.mapper.RestaurantMapper;
import com.dualexpress.model.Produit;
import com.dualexpress.model.Restaurant;
import com.dualexpress.repository.ProduitRepository;
import com.dualexpress.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository repo;
    private final ProduitRepository produitRepo;

    public RestaurantDTO create(Restaurant restaurant) {
        repo.save(restaurant);
        return RestaurantMapper.toDTO(restaurant);
    }

    public List<RestaurantDTO> getAll() {
        return repo.findAll().stream()
                .map(RestaurantMapper::toDTO)
                .toList();
    }

    public RestaurantDTO getById(Long id) {
        return repo.findById(id)
                .map(RestaurantMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Restaurant introuvable"));
    }

    public void ajouterProduit(Long restaurantId, Produit produit) {
        Restaurant r = repo.findById(restaurantId)
                .orElseThrow();
        produit.setRestaurant(r);
        produitRepo.save(produit);
    }
}
