import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { addAppointment } from "../api/appointmentService";

const AppointmentDialog = ({ open, onClose }) => {
  const [appointment, setAppointment] = useState({
    appointmentDate: "",
    reason: "",
    doctorName: "",
    treatment: "",
    pet: { id: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "petId") {
      setAppointment({ ...appointment, pet: { id: value } });
    } else {
      setAppointment({ ...appointment, [name]: value });
    }
  };

  const handleSubmit = async () => {
    await addAppointment(appointment);
    onClose(true);
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>📅 Schedule Appointment</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Pet ID"
            name="petId"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            label="Appointment Date"
            name="appointmentDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField label="Reason" name="reason" onChange={handleChange} />
          <TextField label="Doctor Name" name="doctorName" onChange={handleChange} />
          <TextField label="Treatment" name="treatment" onChange={handleChange} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentDialog;
