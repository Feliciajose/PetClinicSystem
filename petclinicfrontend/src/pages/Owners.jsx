import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  TextField,
  Paper,
  Stack,
  Box,
} from "@mui/material";
import OwnerCard from "../components/OwnerCard";
import { getAllOwners, addOwner, deleteOwner } from "../api/ownerService";

const Owners = () => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newOwner, setNewOwner] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const loadOwners = async () => {
    const res = await getAllOwners();
    setOwners(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadOwners();
  }, []);

  const handleAddOwner = async (e) => {
    e.preventDefault();
    await addOwner(newOwner);
    setNewOwner({ name: "", email: "", phoneNumber: "", address: "" });
    loadOwners();
  };

  const handleDelete = async (id) => {
    await deleteOwner(id);
    loadOwners();
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
        👩‍⚕️ Owner Management
      </Typography>

      {/* ADD OWNER FORM */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: "background.paper" }}>
        <Typography variant="h6" gutterBottom>Add New Owner</Typography>
        <form onSubmit={handleAddOwner}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <TextField label="Name" name="name" value={newOwner.name} onChange={(e) => setNewOwner({ ...newOwner, name: e.target.value })} />
            <TextField label="Email" name="email" value={newOwner.email} onChange={(e) => setNewOwner({ ...newOwner, email: e.target.value })} />
            <TextField label="Phone Number" name="phoneNumber" value={newOwner.phoneNumber} onChange={(e) => setNewOwner({ ...newOwner, phoneNumber: e.target.value })} />
            <TextField label="Address" name="address" value={newOwner.address} onChange={(e) => setNewOwner({ ...newOwner, address: e.target.value })} />
          </Stack>
          <Button sx={{ mt: 2 }} variant="contained" color="primary" type="submit">
            + Add Owner
          </Button>
        </form>
      </Paper>

      {/* OWNER LIST */}
      <Grid container>
        {owners.map((owner) => (
          <OwnerCard key={owner.id} owner={owner} onDelete={handleDelete} />
        ))}
      </Grid>
    </div>
  );
};

export default Owners;
