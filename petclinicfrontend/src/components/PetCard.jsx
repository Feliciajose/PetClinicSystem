import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const PetCard = ({ pet, onDelete }) => {
  return (
    <Card sx={{ bgcolor: "background.paper", boxShadow: 3, m: 2, width: 260 }}>
      <CardContent>
        <Typography variant="h6" color="primary">{pet.name}</Typography>
        <Typography variant="body2">Breed: {pet.breed}</Typography>
        <Typography variant="body2">Species: {pet.species}</Typography>
        <Typography variant="body2">Gender: {pet.gender}</Typography>
        <Typography variant="body2">Weight: {pet.weight} kg</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="secondary">Edit</Button>
        <Button size="small" color="error" onClick={() => onDelete(pet.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
