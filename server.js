import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Fetch Films
app.get("/films", async (req, res) => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/films/");
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching films:", error);
    res.status(500).json({ error: "Failed to fetch films" });
  }
});

// Fetch People
app.get("/characters", async (req, res) => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching characters:", error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

// Fetch Planets
app.get("/planets", async (req, res) => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/");
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching planets:", error);
    res.status(500).json({ error: "Failed to fetch planets" });
  }
});

// Fetch Vehicles
app.get("/vehicles", async (req, res) => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles/");
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
