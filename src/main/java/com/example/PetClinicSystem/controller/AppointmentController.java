package com.example.PetClinicSystem.controller;

import com.example.PetClinicSystem.model.Appointment;
import com.example.PetClinicSystem.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/appointments")

public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/add")
    public ResponseEntity<?> addAppointment(@RequestBody Appointment appointment) {
        try {
            Appointment saved = appointmentService.saveAppointment(appointment);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace(); // 👈 this will show error in console
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/getall")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable int id) {
        return appointmentService.getAppointmentById(id);
    }

    @GetMapping("/date/{date}")
    public List<Appointment> getAppointmentsByDate(@PathVariable String date) {
        return appointmentService.getAppointmentsByDate(LocalDate.parse(date));
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAppointment(@PathVariable int id) {
        appointmentService.deleteAppointment(id);
        return "Appointment deleted successfully!";
    }
}
