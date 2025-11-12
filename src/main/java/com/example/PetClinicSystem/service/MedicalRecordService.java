package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.MedicalRecord;
import java.util.List;

public interface MedicalRecordService {
    MedicalRecord saveRecord(MedicalRecord record);
    List<MedicalRecord> getAllRecords();
    MedicalRecord getRecordById(int id);
    List<MedicalRecord> getRecordsByVaccine(String vaccineName);
    void deleteRecord(int id);
}
