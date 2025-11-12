import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Box,
} from "@mui/material";
import AppointmentDialog from "../components/AppointmentDialog";
import { getAllAppointments, deleteAppointment } from "../api/appointmentService";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    const res = await getAllAppointments();
    setAppointments(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    loadAppointments();
  };

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress color="primary" size={50} />
         <Typography variant="h6" color="text.secondary">
      Loading, please wait...
    </Typography>
      </Box>
    );
  

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        🗓 Appointments
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
        + Add Appointment
      </Button>

      <Grid container spacing={2} mt={2}>
        {appointments.map((appt) => (
          <Grid item key={appt.id}>
            <Card sx={{ width: 300, bgcolor: "background.paper", boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6">{appt.doctorName}</Typography>
                <Typography>Date: {appt.appointmentDate}</Typography>
                <Typography>Reason: {appt.reason}</Typography>
                <Typography>Treatment: {appt.treatment}</Typography>
              </CardContent>
              <Button color="error" onClick={() => handleDelete(appt.id)}>
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <AppointmentDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
};

export default Appointments;
