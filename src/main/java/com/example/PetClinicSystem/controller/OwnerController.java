package com.example.PetClinicSystem.controller;

import com.example.PetClinicSystem.model.Owner;
import com.example.PetClinicSystem.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/owners")
public class OwnerController {
    @Autowired
    private OwnerService ownerService;

    @PostMapping("/add")
    public String addOwner(@RequestBody Owner owner) {
        ownerService.saveOwner(owner);
        return "New owner added!";
    }

    @GetMapping("/getall")
    public List<Owner> getAllOwners() {
        return ownerService.getAllOwners();
    }

    @GetMapping("/{id}")
    public Owner getOwnerById(@PathVariable int id) {
        return ownerService.getOwnerById(id);
    }

    @PutMapping("/update/{id}")
    public Owner updateOwner(@PathVariable int id, @RequestBody Owner owner) {
        return ownerService.updateOwner(id, owner);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteOwner(@PathVariable int id) {
        ownerService.deleteOwner(id);
        return "Owner deleted successfully!";
    }

    @GetMapping("/search")
    public List<Owner> searchOwner(@RequestParam String name) {
        return ownerService.searchOwner(name);
    }
}
