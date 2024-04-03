package com.qaproject.backend.controller;

import com.qaproject.backend.model.Buyer;
import com.qaproject.backend.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/buyers")
public class BuyerController {

    @Autowired
    private BuyerRepository buyerRepository;

    @PostMapping
    public Buyer createBuyer(@RequestBody Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @GetMapping
    public List<Buyer> getAllBuyers() {
        return buyerRepository.findAll();
    }
}