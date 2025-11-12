package com.example.PetClinicSystem.controller;
import com.example.PetClinicSystem.model.MedicalRecord;
import com.example.PetClinicSystem.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/records")
public class MedicalRecordController {
    @Autowired
    private MedicalRecordService recordService;

    @PostMapping("/add")
    public String addRecord(@RequestBody MedicalRecord record) {
        recordService.saveRecord(record);
        return "New medical record added!";
    }

    @GetMapping("/getall")
    public List<MedicalRecord> getAllRecords() {
        return recordService.getAllRecords();
    }

    @GetMapping("/{id}")
    public MedicalRecord getRecordById(@PathVariable int id) {
        return recordService.getRecordById(id);
    }

    @GetMapping("/search")
    public List<MedicalRecord> getRecordsByVaccine(@RequestParam String vaccineName) {
        return recordService.getRecordsByVaccine(vaccineName);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRecord(@PathVariable int id) {
        recordService.deleteRecord(id);
        return "Medical record deleted successfully!";
    }
}
