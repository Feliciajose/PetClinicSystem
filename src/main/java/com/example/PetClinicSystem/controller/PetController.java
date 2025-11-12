package com.example.PetClinicSystem.controller;

import com.example.PetClinicSystem.model.Pet;
import com.example.PetClinicSystem.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/pet")
public class PetController {
    @Autowired
    private PetService petService;
    @PostMapping("/add")
    public String addPet(@RequestBody Pet pet){
        petService.savePet(pet);
        return "New pet is added!";
    }
    @GetMapping("/getall")
    public List<Pet> getAllPet(){
        return petService.getAllPet();
    }
    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable int id) {
        return petService.getPetById(id);
    }

    @PutMapping("/update/{id}")
    public Pet updatePet(@PathVariable int id, @RequestBody Pet pet) {
        return petService.updatePet(id, pet);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePet(@PathVariable int id) {
        petService.deletePet(id);
        return "Pet deleted successfully!";
    }

    @GetMapping("/search")
    public List<Pet> searchPet(@RequestParam(required = false) String name,
                               @RequestParam(required = false) String species,
                               @RequestParam(required = false) String breed) {
        return petService.searchPet(name, species, breed);
    }

}
