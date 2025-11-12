package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.Owner;
import java.util.List;


public interface OwnerService {
    Owner saveOwner(Owner owner);
    List<Owner> getAllOwners();
    Owner getOwnerById(int id);  // ✅ must match exactly
    Owner updateOwner(int id, Owner owner);
    void deleteOwner(int id);
    List<Owner> searchOwner(String name);
}
