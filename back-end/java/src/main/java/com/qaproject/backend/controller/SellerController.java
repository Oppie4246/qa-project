package com.qaproject.backend.controller;

import com.qaproject.backend.model.Seller;
import com.qaproject.backend.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/sellers")
public class SellerController {

    @Autowired
    private SellerRepository sellerRepository;

    @PostMapping
    public Seller createSeller(@RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }

    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }
}