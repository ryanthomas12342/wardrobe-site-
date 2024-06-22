import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const categories = [
  { value: "Partywear", label: "Partywear" },
  { value: "Home Clothes", label: "Home Clothes" },
  { value: "Office Wear", label: "Office Wear" },
];

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const CreateNew = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("color", color);
    formData.append("photo", photo);

    try {
      const response = await axios.post("/api/clothes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Clothing item added:", response.data);
    } catch (error) {
      console.error("Error adding clothing item:", error);
    }
  };

  return (
    <>
      <Header></Header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add New Clothing Item
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="category"
                  select
                  required
                  fullWidth
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="color"
                  select
                  required
                  fullWidth
                  label="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  {colors.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  id="photo"
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Clothing Item
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default CreateNew;
