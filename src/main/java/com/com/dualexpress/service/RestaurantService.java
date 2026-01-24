
package com.dualexpress.service;

import com.dualexpress.model.Restaurant;
import com.dualexpress.model.Produit;
import com.dualexpress.repository.RestaurantRepository;
import com.dualexpress.repository.ProduitRepository;
import com.dualexpress.service.exceptions.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final ProduitRepository produitRepository;

    public Restaurant create(Restaurant r) {
        return restaurantRepository.save(r);
    }

    public List<Restaurant> getAll() {
        return restaurantRepository.findAll();
    }

    public Restaurant getById(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Restaurant introuvable"));
    }

    public void ajouterProduit(Long restaurantId, Produit produit) {
        Restaurant r = getById(restaurantId);
        r.ajouterProduit(produit);
        restaurantRepository.save(r);
    }

    public void supprimerProduit(Long restaurantId, Long produitId) {
        Restaurant r = getById(restaurantId);
        Produit p = produitRepository.findById(produitId)
                .orElseThrow(() -> new ResourceNotFoundException("Produit introuvable"));

        r.supprimerProduit(p);
        restaurantRepository.save(r);
    }
}
