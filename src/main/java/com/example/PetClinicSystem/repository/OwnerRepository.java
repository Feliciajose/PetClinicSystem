package com.example.PetClinicSystem.repository;

import com.example.PetClinicSystem.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OwnerRepository  extends JpaRepository<Owner, Integer> {
    List<Owner> findByNameContainingIgnoreCase(String name);
    Owner findByEmail(String email);
    List<Owner> findByPhoneNumber(String phoneNumber);
}
