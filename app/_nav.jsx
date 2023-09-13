import { Grid } from "@mui/material";

export default function Nav () {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                projects
            </Grid>
            <Grid item>
                about
            </Grid>
            <Grid item>
                contact
            </Grid>
        </Grid>
    )
}