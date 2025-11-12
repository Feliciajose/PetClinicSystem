package com.example.PetClinicSystem.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Pet {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String species;
    private String breed;
    private String gender;
    private LocalDate dateOfBirth;
    private String colorMarkings;
    private double weight;
    private String microchipId;
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;
    public Pet() {
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getColorMarkings() {
        return colorMarkings;
    }

    public void setColorMarkings(String colorMarkings) {
        this.colorMarkings = colorMarkings;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMicrochipId() {
        return microchipId;
    }

    public void setMicrochipId(String microchipId) {
        this.microchipId = microchipId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", species='" + species + '\'' +
                ", breed='" + breed + '\'' +
                ", gender='" + gender + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", colorMarkings='" + colorMarkings + '\'' +
                ", weight=" + weight +
                ", microchipId='" + microchipId + '\'' +
                '}';
    }
}

