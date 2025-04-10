import { useState } from "react";
import { Box, TextField, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";

interface Recipient {
  id: string;
  name: string;
  email: string;
}

interface RecipientsProps {
  onSelect: (recipients: Recipient[]) => void;
}

export const Recipients = ({ onSelect }: RecipientsProps) => {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddRecipient = () => {
    if (name && email) {
      const newRecipient: Recipient = {
        id: Date.now().toString(),
        name,
        email,
      };
      const updatedRecipients = [...recipients, newRecipient];
      setRecipients(updatedRecipients);
      onSelect(updatedRecipients);
      setName("");
      setEmail("");
    }
  };

  const handleDeleteRecipient = (id: string) => {
    const updatedRecipients = recipients.filter((r) => r.id !== id);
    setRecipients(updatedRecipients);
    onSelect(updatedRecipients);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom align="center">
        Who would you like to celebrate with?
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleAddRecipient}
            disabled={!name || !email}
          >
            Add
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {recipients.map((recipient) => (
            <motion.div
              key={recipient.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Chip
                label={`${recipient.name} (${recipient.email})`}
                onDelete={() => handleDeleteRecipient(recipient.id)}
                sx={{ m: 0.5 }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Recipients;
