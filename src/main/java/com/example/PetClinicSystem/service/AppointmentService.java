package com.example.PetClinicSystem.service;
import com.example.PetClinicSystem.model.Appointment;
import java.time.LocalDate;
import java.util.List;
public interface AppointmentService{
    Appointment saveAppointment(Appointment appointment);
    List<Appointment> getAllAppointments();
    Appointment getAppointmentById(int id);
    List<Appointment> getAppointmentsByDate(LocalDate date);
    void deleteAppointment(int id);
}
