package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.Pet;
import com.example.PetClinicSystem.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImpl implements PetService{
    @Autowired
    private PetRepository petRepository;
    @Override
    public Pet savePet(Pet pet) {
        return petRepository.save(pet);
    }
    @Override
    public List<Pet> getAllPet(){
        return petRepository.findAll();
    }
    @Override
    public Pet getPetById(int id) {
        return petRepository.findById(id).orElse(null);
    }

    @Override
    public Pet updatePet(int id, Pet petDetails) {
        Pet pet = petRepository.findById(id).orElseThrow();
        pet.setName(petDetails.getName());
        pet.setSpecies(petDetails.getSpecies());
        pet.setBreed(petDetails.getBreed());
        pet.setGender(petDetails.getGender());
        pet.setDateOfBirth(petDetails.getDateOfBirth());
        pet.setColorMarkings(petDetails.getColorMarkings());
        pet.setWeight(petDetails.getWeight());
        pet.setMicrochipId(petDetails.getMicrochipId());
        return petRepository.save(pet);
    }

    @Override
    public void deletePet(int id) {
        petRepository.deleteById(id);
    }

    @Override
    public List<Pet> searchPet(String name, String species, String breed) {
        return petRepository.findByNameContainingOrSpeciesContainingOrBreedContaining(name, species, breed);
    }

}
