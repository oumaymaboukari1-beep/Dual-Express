package com.dualexpress.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.util.stream.Collectors;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Utilisateur implements UserDetails {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(unique = true, nullable = false)
 private String username;

 @JsonIgnore
 @Column(nullable = false)
 private String password;

 private String email;
 private String fullName;

 // Flags de sécurité
 @Builder.Default
 private boolean accountNonExpired = true;
 @Builder.Default
 private boolean accountNonLocked = true;
 @Builder.Default
 private boolean credentialsNonExpired = true;
 @Builder.Default
 private boolean enabled = true;

 @ManyToMany(fetch = FetchType.EAGER)
 @JoinTable(name = "utilisateur_roles",
         joinColumns = @JoinColumn(name = "utilisateur_id"),
         inverseJoinColumns = @JoinColumn(name = "role_id"))
 @Builder.Default
 private Set<Role> roles = new HashSet<>();

 // ===== UserDetails =====
 @Override
 @JsonIgnore
 public Collection<? extends GrantedAuthority> getAuthorities() {
  // On mappe "ADMIN" -> "ROLE_ADMIN"
  return roles.stream()
          .map(r -> (GrantedAuthority) () -> "ROLE_" + r.getRole())
          .collect(Collectors.toSet());
 }

 @Override @JsonIgnore
 public boolean isAccountNonExpired() { return accountNonExpired; }

 @Override @JsonIgnore
 public boolean isAccountNonLocked() { return accountNonLocked; }

 @Override @JsonIgnore
 public boolean isCredentialsNonExpired() { return credentialsNonExpired; }

 @Override @JsonIgnore
 public boolean isEnabled() { return enabled; }
}