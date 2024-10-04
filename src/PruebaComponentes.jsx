import { TextField, Button, IconButton, Box } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const PruebaComponentes = () => {
  const [visible, setVisible] = useState(false);
  const cambiarVisibilidad = () => {
    setVisible(!visible);
  };

  return (
    <div
      style={{
        margin: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField placeholder="Email" variant="outlined" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          label="contraseña"
          type={visible ? "text" : "password"}
        />

        <IconButton onClick={cambiarVisibilidad}>
          {visible ? (
            <VisibilityIcon color="primary" />
          ) : (
            <VisibilityOffIcon color="primary" />
          )}
        </IconButton>
      </Box>
      <Button variant="outlined" color="secondary" size="large" fullWidth>
        Contained
      </Button>

      <input type="password" placeholder="emaik" />
      <button>Contained</button>
    </div>
  );
};

export default PruebaComponentes;
