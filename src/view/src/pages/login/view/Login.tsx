import { AccountCircle } from "@mui/icons-material";
import { FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { IUsuario } from "../../../Shared/interfaces/IUsuario";

interface ILoginProps {
    user: IUsuario;
}

const Login: FC <ILoginProps> = ({user}) => {
    
    console.log(user);

    return (
        <Grid container sx={{ width: '100vw', height: '100vh', backgroundColor: 'pink' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Email" variant="standard" value={user.email} />
            </Box>
        </Grid>
    );
    
};

export default Login;