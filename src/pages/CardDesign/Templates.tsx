import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { TemplateCard } from "../../components/organisms";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: "birthday-1",
    title: "Classic Birthday",
    description: "A timeless birthday celebration design",
    preview: "🎂🎈🎁",
    type: "birthday",
  },
  {
    id: "birthday-2",
    title: "Party Time",
    description: "Vibrant and fun birthday celebration",
    preview: "🎉🎊🎈",
    type: "birthday",
  },
  {
    id: "anniversary-1",
    title: "Romantic Anniversary",
    description: "Elegant design for celebrating love",
    preview: "💕💑💝",
    type: "anniversary",
  },
  {
    id: "graduation-1",
    title: "Academic Achievement",
    description: "Celebrate educational milestones",
    preview: "🎓📚🎉",
    type: "graduation",
  },
  {
    id: "wedding-1",
    title: "Elegant Wedding",
    description: "Sophisticated wedding celebration",
    preview: "💍💐💒",
    type: "wedding",
  },
  {
    id: "baby-shower-1",
    title: "Welcome Baby",
    description: "Sweet celebration for new arrivals",
    preview: "👶🎀🎈",
    type: "baby-shower",
  },
];

export const Templates = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTemplateSelect = (template: any) => {
    navigate("/celebrate", { state: { selectedTemplate: template } });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Celebration Templates
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Choose from our collection of beautiful templates
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 3, maxWidth: 600, mx: "auto" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredTemplates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <TemplateCard
              title={template.title}
              description={template.description}
              preview={template.preview}
              onClick={() => handleTemplateSelect(template)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
