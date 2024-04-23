//package com.qaproject.backend.controller;
//
//import com.qaproject.backend.model.Property;
//import com.qaproject.backend.repository.PropertyRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/properties")
//public class PropertyController {
//
//    @Autowired
//    private PropertyRepository propertyRepository;
//
//    // Get all properties
//    @GetMapping
//    public List<Property> getAllProperties() {
//        return propertyRepository.findAll();
//    }
//
//    // Create a new property
//    @PostMapping
//    public Property createProperty(@RequestBody Property property) {
//        return propertyRepository.save(property);
//    }
//
//    // Get a single property by ID
//    @GetMapping
//    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
//        Property property = propertyRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
//        return ResponseEntity.ok(property);
//    }
//
//    // Update a property
//    @PutMapping("/{id}")
//    public ResponseEntity<Property> updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
//        Property property = propertyRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
//
//        property.setTitle(propertyDetails.getTitle());
//        property.setDescription(propertyDetails.getDescription());
//        property.setPrice(propertyDetails.getPrice());
//        property.setImageUrl(propertyDetails.getImageUrl());
//
//        final Property updatedProperty = propertyRepository.save(property);
//        return ResponseEntity.ok(updatedProperty);
//    }
//
//    // Delete a property
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
//        Property property = propertyRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
//
//        propertyRepository.delete(property);
//        return ResponseEntity.ok().build();
//    }
//}