package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Role {
 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 // Ex: ADMIN, CLIENT, LIVREUR, RESTAURANT
 @Column(unique = true, nullable = false)
 private String role;
}