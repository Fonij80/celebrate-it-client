import { Box, Grid, Typography } from "@mui/material";
import CelebrationCard from "./CelebrationCard";

const celebrationTypes = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Celebrate someone special on their special day",
    icon: "🎂",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "Mark another year of love and togetherness",
    icon: "💑",
  },
  {
    id: "graduation",
    title: "Graduation",
    description: "Celebrate academic achievements",
    icon: "🎓",
  },
  {
    id: "wedding",
    title: "Wedding",
    description: "Share the joy of a new beginning",
    icon: "💍",
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    description: "Welcome a new life into the world",
    icon: "👶",
  },
  {
    id: "promotion",
    title: "Promotion",
    description: "Celebrate career milestones",
    icon: "📈",
  },
];

interface CelebrationTypeProps {
  onSelect: (type: string) => void;
}

export const CelebrationType = ({ onSelect }: CelebrationTypeProps) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom align="center">
        What are you celebrating?
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {celebrationTypes.map((type) => (
          <Grid item xs={12} sm={6} md={4} key={type.id} component="div">
            <CelebrationCard
              title={type.title}
              description={type.description}
              icon={type.icon}
              onClick={() => onSelect(type.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CelebrationType;
