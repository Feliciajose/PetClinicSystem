package com.example.PetClinicSystem.repository;

import com.example.PetClinicSystem.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet,Integer> {
    List<Pet> findByNameContainingOrSpeciesContainingOrBreedContaining(String name, String species, String breed);
}
