import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TemplateCard from "./TemplateCard";

interface Template {
  id: string;
  title: string;
  description: string;
  preview: string;
  type: string;
}

interface TemplateSelectionProps {
  onSelect: (template: Template) => void;
}

const templates: Template[] = [
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

export const TemplateSelection = ({ onSelect }: TemplateSelectionProps) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom align="center">
        Choose a Template
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TemplateCard
                title={template.title}
                description={template.description}
                preview={template.preview}
                onClick={() => onSelect(template)}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TemplateSelection;
