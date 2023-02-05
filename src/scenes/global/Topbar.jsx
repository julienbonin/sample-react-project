import { Box, Button, ButtonGroup, Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import {TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';

const Topbar = () => {

    return (
        <Box backgroundColor="#141414" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"  minHeight="8vh" >

                <Box display="flex" alignItems="center"  height="62%" width="auto" borderRadius={1} backgroundColor="white" marginLeft={3}>
                    <TextField id="standard-basic" label="Search" variant="outlined" size="small" style={{  width:"100%", marginLeft:10 }}/>
                    <Button><SearchIcon /></Button>
                </Box>

                <Box display="flex" alignItems="center"  height="62%" width="auto" borderRadius={1}  marginLeft={3}>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Send
      </Fab>
                </Box>

                <Box display="flex" alignItems="center"  height="62%" width="auto" borderRadius={1}  marginLeft={3}>
                <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
                    <Button>One</Button>
                    <Button>Two</Button>
                </ButtonGroup>
                </Box>


                <Box display="flex" alignItems="center" justifyContent="right" height="50%" width="auto" marginRight={15} backgroundColor="transparent">
                    <Button><AddBoxIcon /></Button>
                    <Button><SettingsIcon /></Button>
                    <Button><TuneIcon /></Button>
                </Box>

            </Box>
    )
}

export default Topbar