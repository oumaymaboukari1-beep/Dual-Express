package com.dualexpress.controller;

import com.dualexpress.dto.AuthDtos.LoginRequest;
import com.dualexpress.dto.AuthDtos.MeResponse;
import com.dualexpress.dto.AuthDtos.RegisterRequest;
import com.dualexpress.model.Utilisateur;
import com.dualexpress.repository.UtilisateurRepository;
import com.dualexpress.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authManager;
    private final UtilisateurRepository userRepo;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest req) {
        authService.register(req);
        return ResponseEntity.ok("Inscription réussie");
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody LoginRequest req, HttpServletRequest request) {

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword());

        Authentication auth = authManager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(auth);

        HttpSession session = request.getSession(true);
        session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/me")
    public ResponseEntity<MeResponse> me() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        Utilisateur u = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        return ResponseEntity.ok(authService.toMe(u));
    }
}