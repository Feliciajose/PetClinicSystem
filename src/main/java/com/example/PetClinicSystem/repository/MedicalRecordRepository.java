package com.example.PetClinicSystem.repository;

import com.example.PetClinicSystem.model.MedicalRecord;
import com.example.PetClinicSystem.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {
    // Get all records for a specific pet
    List<MedicalRecord> findByPet(Pet pet);

    // Search by vaccine name
    List<MedicalRecord> findByVaccineNameContainingIgnoreCase(String vaccineName);
}
