package com.dualexpress.repository;

import com.dualexpress.model.Paiement;
import com.dualexpress.model.enums.StatutPaiement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaiementRepository extends JpaRepository<Paiement, Long> {

    Optional<Paiement> findByCommandeId(Long commandeId);

    boolean existsByCommandeIdAndStatut(Long commandeId, StatutPaiement statut);
}