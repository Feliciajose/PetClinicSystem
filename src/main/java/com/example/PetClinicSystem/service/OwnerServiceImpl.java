package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.Owner;
import com.example.PetClinicSystem.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerServiceImpl implements OwnerService {
    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public Owner saveOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner getOwnerById(int id) {
        return ownerRepository.findById(id).orElse(null);
    }

    @Override
    public Owner updateOwner(int id, Owner updatedOwner) {
        Owner owner = ownerRepository.findById(id).orElseThrow();
        owner.setName(updatedOwner.getName());
        owner.setEmail(updatedOwner.getEmail());
        owner.setPhoneNumber(updatedOwner.getPhoneNumber());
        owner.setAddress(updatedOwner.getAddress());
        return ownerRepository.save(owner);
    }

    @Override
    public void deleteOwner(int id) {
        ownerRepository.deleteById(id);
    }

    @Override
    public List<Owner> searchOwner(String name) {
        return ownerRepository.findByNameContainingIgnoreCase(name);
    }
}
