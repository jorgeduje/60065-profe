import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styles } from "./PruebaGrid";
export const PruebaGrid = () => {
  return (
    <div>
      <Grid container={true}>
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloUno}>Caja 1</Typography>
        </Grid>
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloDos}>Caja 2</Typography>
        </Grid>
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloTres}>Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
