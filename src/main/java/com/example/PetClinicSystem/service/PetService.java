package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.Pet;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PetService {
    public Pet savePet(Pet pet);

    List<Pet> getAllPet();
    Pet getPetById(int id);
    Pet updatePet(int id, Pet pet);
    void deletePet(int id);
    List<Pet> searchPet(String name, String species, String breed);
}
