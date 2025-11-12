package com.example.PetClinicSystem.service;

import com.example.PetClinicSystem.model.MedicalRecord;
import com.example.PetClinicSystem.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalRecordServiceImpl implements MedicalRecordService{
    @Autowired
    private MedicalRecordRepository recordRepository;

    @Override
    public MedicalRecord saveRecord(MedicalRecord record) {
        return recordRepository.save(record);
    }

    @Override
    public List<MedicalRecord> getAllRecords() {
        return recordRepository.findAll();
    }

    @Override
    public MedicalRecord getRecordById(int id) {
        return recordRepository.findById(id).orElse(null);
    }

    @Override
    public List<MedicalRecord> getRecordsByVaccine(String vaccineName) {
        return recordRepository.findByVaccineNameContainingIgnoreCase(vaccineName);
    }

    @Override
    public void deleteRecord(int id) {
        recordRepository.deleteById(id);
    }
}
