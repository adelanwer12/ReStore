import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface props{
    darkMode:boolean;
    handelThemeChange:()=> void
}

export default function Header({darkMode, handelThemeChange}:props){
    return(
        <AppBar position='static' sx={{mb: 4}}> 
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                    <Switch checked= {darkMode} onChange={handelThemeChange}/>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}