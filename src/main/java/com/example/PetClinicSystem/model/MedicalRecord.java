package com.example.PetClinicSystem.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue
    private int id;
    private String vaccineName;
    private LocalDate vaccinationDate;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public LocalDate getVaccinationDate() {
        return vaccinationDate;
    }

    public void setVaccinationDate(LocalDate vaccinationDate) {
        this.vaccinationDate = vaccinationDate;
    }

    public String getVaccineName() {
        return vaccineName;
    }

    public void setVaccineName(String vaccineName) {
        this.vaccineName = vaccineName;
    }
}
