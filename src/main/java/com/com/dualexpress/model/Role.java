
package com.dualexpress.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 // ADMIN, CLIENT, LIVREUR, RESTAURANT
 private String role;
}
