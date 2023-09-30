import { Grid } from "@mui/material";
import './_nav.css';

export default function Nav () {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="nav"
        >
            <Grid item>
                <a href="#projects">projects</a>
            </Grid>
            <Grid item>
                <a href="#skills">skills</a>
            </Grid>
            <Grid item>
                <a href="#contact">contact</a>
            </Grid>
        </Grid>
    )
}