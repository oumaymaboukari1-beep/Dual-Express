package com.dualexpress.repository;

import com.dualexpress.model.Commande;
import com.dualexpress.model.enums.StatutCommande;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
    List<Commande> findByStatut(StatutCommande statut);
}