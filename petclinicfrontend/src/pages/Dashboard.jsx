import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  keyframes,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import illustration from "../illustrationpet.jpg";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;
const Dashboard = () => {
  const [stats, setStats] = useState({
    pets: 0,
    owners: 0,
    appointments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [petSpeciesData, setPetSpeciesData] = useState([]);
  const [appointmentTrend, setAppointmentTrend] = useState([]);

  // Fetch stats and chart data
  const loadStats = async () => {
    try {
      const [petsRes, ownersRes, apptRes] = await Promise.all([
        axios.get("http://localhost:8080/api/pet/getall"),
        axios.get("http://localhost:8080/api/owners/getall"),
        axios.get("http://localhost:8080/api/appointments/getall"),
      ]);

      const pets = petsRes.data;
      const owners = ownersRes.data;
      const appointments = apptRes.data;

      // Count summary
      setStats({
        pets: pets.length,
        owners: owners.length,
        appointments: appointments.length,
      });

      // Pie chart → count of pets by species
      const speciesCount = {};
      pets.forEach((p) => {
        speciesCount[p.species] = (speciesCount[p.species] || 0) + 1;
      });
      const speciesData = Object.entries(speciesCount).map(([key, value]) => ({
        name: key,
        value,
      }));
      setPetSpeciesData(speciesData);

      // Bar chart → appointments per doctor
      const doctorCount = {};
      appointments.forEach((a) => {
        if (a.doctorName) {
          doctorCount[a.doctorName] = (doctorCount[a.doctorName] || 0) + 1;
        }
      });
      const trendData = Object.entries(doctorCount).map(([key, value]) => ({
        doctor: key,
        count: value,
      }));
      setAppointmentTrend(trendData);
    } catch (err) {
      console.error("Error loading stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const COLORS = ["#8B4513", "#D2B48C", "#A0522D", "#CD853F", "#DEB887"];

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
  <Box
    sx={{
      padding: "2rem",
      minHeight: "100vh",
      backgroundColor: "background.default",
    }}
  >
    {/* Dashboard Header */}
    <Typography
      variant="h4"
      color="primary"
      gutterBottom
      sx={{
        textAlign: "center",
        mb: 4,
        fontWeight: 600,
      }}
    >
       Pet Clinic Dashboard
    </Typography>

    {/* Main Layout Grid */}
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      justifyContent="center"
    >
      {/* Left Section - Data Driven (Takes 8/12 width) */}
      <Grid item xs={12} md={8}>
        {/* Summary Cards */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {[
            { title: "Total Pets", count: stats.pets, icon: <PetsIcon /> },
            { title: "Appointments", count: stats.appointments, icon: <EventIcon /> },
            { title: "Owners", count: stats.owners, icon: <PeopleIcon /> },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    {item.icon} {item.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.count}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={4}>
          {/* Pie Chart: Pet Distribution */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 2,
                boxShadow: 3,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                Pet Distribution by Species
              </Typography>
              {petSpeciesData.length === 0 ? (
                <Typography>No data available</Typography>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={petSpeciesData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8B4513"
                      label
                    >
                      {petSpeciesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </Card>
          </Grid>

          {/* Bar Chart: Appointments per Doctor */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 2,
                boxShadow: 3,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                 Appointments per Doctor
              </Typography>
              {appointmentTrend.length === 0 ? (
                <Typography>No data available</Typography>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={appointmentTrend}>
                    <XAxis dataKey="doctor" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#D2B48C" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Section - Large Illustration with Centered Caption */}
<Grid
  item
  xs={12}
  md={4}
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
  <Box
    sx={{
         animation: `${float} 6s ease-in-out infinite`,
      width: "100%",
      maxWidth: "500px", // 👈 increased size for a more prominent image
      height: "auto",
      borderRadius: 4,
      overflow: "hidden",
      background: "linear-gradient(145deg, #FFF8E7, #f5f1e6)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      p: 2,
      mb: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.02)",
      },
    }}
  >
    <img
      src={illustration}
      alt="Pet Care Illustration"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "16px",
        objectFit: "cover",
      }}
    />
  </Box>

  {/* Caption text centered below the image */}
  <Typography
    variant="h6"
    sx={{
      color: "#4B2E05",
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "rgba(255, 248, 231, 0.9)",
      px: 2,
      py: 1,
      borderRadius: 2,
      boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
      display: "inline-block",
    }}
  >
    Compassionate Care for Every Pet 🐾
  </Typography>
</Grid>
</Grid>
  </Box>
);
}

export default Dashboard;
