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

export const Categories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleTemplateSelect = (template: any) => {
    navigate("/celebrate", { state: { selectedTemplate: template } });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #658147 0%, #B99470 100%)",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {templates.map((template) => (
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
    </Box>
  );
};
