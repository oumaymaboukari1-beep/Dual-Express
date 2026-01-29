package com.dualexpress.repository;

import com.dualexpress.model.Produit;
import com.dualexpress.model.enums.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Long> {

    List<Produit> findByCategorie(Categorie categorie);

    List<Produit> findByDisponibleTrue();

    // ✅ utile: produits d’un restaurant
    List<Produit> findByRestaurantId(Long restaurantId);

    // ✅ utile: produits disponibles d’un restaurant
    List<Produit> findByRestaurantIdAndDisponibleTrue(Long restaurantId);
}