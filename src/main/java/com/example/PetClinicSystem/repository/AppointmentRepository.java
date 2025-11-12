package com.example.PetClinicSystem.repository;

import com.example.PetClinicSystem.model.Appointment;
import com.example.PetClinicSystem.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    // Find appointments by Pet
    List<Appointment> findByPet(Pet pet);

    // Find appointments by doctor name
    List<Appointment> findByDoctorNameContainingIgnoreCase(String doctorName);

    // Find all appointments for a particular date
    List<Appointment> findByAppointmentDate(LocalDate appointmentDate);
}
