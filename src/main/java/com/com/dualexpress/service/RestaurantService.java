package com.dualexpress.service;

import com.dualexpress.dto.RestaurantDTO;
import com.dualexpress.dto.request.RestaurantRequest;
import com.dualexpress.mapper.RestaurantMapper;
import com.dualexpress.model.Restaurant;
import com.dualexpress.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository repo;

    public RestaurantDTO create(RestaurantRequest req) {
        Restaurant restaurant = RestaurantMapper.fromRequest(req);
        repo.save(restaurant);
        return RestaurantMapper.toDTO(restaurant);
    }

    public List<RestaurantDTO> getAll() {
        return repo.findAll().stream()
                .map(RestaurantMapper::toDTO)
                .collect(Collectors.toList());
    }

    public RestaurantDTO getById(Long id) {
        return repo.findById(id)
                .map(RestaurantMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Restaurant introuvable"));
    }
}
