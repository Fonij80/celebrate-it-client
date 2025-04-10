import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface TemplateCardProps {
  title: string;
  description: string;
  preview: string;
  onClick: () => void;
}

export const TemplateCard = ({
  title,
  description,
  preview,
  onClick,
}: TemplateCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
        onClick={onClick}
      >
        <CardContent>
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              p: 2,
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              borderRadius: 1,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "3rem" }}>
              {preview}
            </Typography>
          </Box>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TemplateCard;
