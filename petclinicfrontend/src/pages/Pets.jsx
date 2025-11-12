import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";
import PetCard from "../components/PetCard";
import { getAllPets, addPet, deletePet } from "../api/petService";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPet, setNewPet] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    dateOfBirth: "",
    colorMarkings: "",
    weight: "",
    microchipId: "",
  });

  // Load all pets from backend
  const loadPets = async () => {
    try {
      const res = await getAllPets();
      setPets(res.data);
    } catch (err) {
      console.error("Error loading pets:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  // Add a new pet
  const handleAddPet = async (e) => {
    e.preventDefault();
    try {
      await addPet(newPet);
      setNewPet({
        name: "",
        species: "",
        breed: "",
        gender: "",
        dateOfBirth: "",
        colorMarkings: "",
        weight: "",
        microchipId: "",
      });
      loadPets();
    } catch (err) {
      console.error("Error adding pet:", err);
    }
  };

  // Delete a pet
  const handleDelete = async (id) => {
    try {
      await deletePet(id);
      loadPets();
    } catch (err) {
      console.error("Error deleting pet:", err);
    }
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
        🐾 Pet Management
      </Typography>

      {/* ADD PET FORM */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: "background.paper" }}>
        <Typography variant="h6" gutterBottom>
          Add New Pet
        </Typography>
        <form onSubmit={handleAddPet}>
          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={newPet.name}
                onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Species"
                name="species"
                value={newPet.species}
                onChange={(e) =>
                  setNewPet({ ...newPet, species: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Breed"
                name="breed"
                value={newPet.breed}
                onChange={(e) =>
                  setNewPet({ ...newPet, breed: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                value={newPet.gender}
                onChange={(e) =>
                  setNewPet({ ...newPet, gender: e.target.value })
                }
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={newPet.dateOfBirth}
                onChange={(e) =>
                  setNewPet({ ...newPet, dateOfBirth: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Color Markings"
                name="colorMarkings"
                value={newPet.colorMarkings}
                onChange={(e) =>
                  setNewPet({ ...newPet, colorMarkings: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Weight (kg)"
                name="weight"
                type="number"
                value={newPet.weight}
                onChange={(e) =>
                  setNewPet({ ...newPet, weight: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Microchip ID"
                name="microchipId"
                value={newPet.microchipId}
                onChange={(e) =>
                  setNewPet({ ...newPet, microchipId: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            + Add Pet
          </Button>
        </form>
      </Paper>

      {/* PET LIST */}
      <Grid container spacing={2}>
        {pets.map((pet) => (
          <Grid item key={pet.id}>
            <PetCard pet={pet} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Pets;