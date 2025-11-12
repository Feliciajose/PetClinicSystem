import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const OwnerCard = ({ owner, onDelete }) => {
  return (
    <Card sx={{ bgcolor: "background.paper", boxShadow: 2, m: 2, width: 280 }}>
      <CardContent>
        <Typography variant="h6" color="primary">
          {owner.name}
        </Typography>
        <Typography variant="body2">Email: {owner.email}</Typography>
        <Typography variant="body2">Phone: {owner.phoneNumber}</Typography>
        <Typography variant="body2">Address: {owner.address}</Typography>
      </CardContent>
      <CardActions>
        <Button color="error" onClick={() => onDelete(owner.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default OwnerCard;
