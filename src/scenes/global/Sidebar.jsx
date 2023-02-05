
import { Box, Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Sidebar = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("Dashboard");

    const nav_home = () => { setSelected('Dashboard'); navigate('/Dashboard') }

    const sign_up = () => { setSelected('Signup'); navigate('/Signup') }

    const three_scene = () => { setSelected('ThreeScene'); navigate('/ThreeScene') }  
    const nav_notebooks = () => { setSelected('Notebook'); navigate('/Notebook') }

    return (
        <Box backgroundColor="#1F2A40" display="flex" flexDirection="column" justifyContent="space-between" height="100vh" width="10vw" alignItems="center">
                
                <Box display="flex" height="15%" alignItems="center" >
                    <Avatar
                        sx={{ bgcolor: "white", color: "#1F2A40" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    ></Avatar>
                </Box>
                
                <Box display="flex" flexDirection="column" justifyContent="left" height="80%" width="100%" alignItems="center">
                    
                    <Box backgroundColor={(selected === "Dashboard") ? "lightgrey" : "transparent"} width="100%" margin="10%">
                        <Button style={{color:(selected === "Dashboard") ? "black" : "white", width:"100%", fontSize:"18px"}} onClick={nav_home} >Dashboard</Button>
                    </Box>

                    <Box backgroundColor={(selected === "Signup") ? "lightgrey" : "transparent"} width="100%" margin="10%">
                        <Button style={{color:(selected === "Signup") ? "black" : "white", width:"100%", fontSize:"18px"}} onClick={sign_up} >Form</Button>
                    </Box>

                    <Box backgroundColor={(selected === "ThreeScene") ? "lightgrey" : "transparent"} width="100%" margin="10%">
                        <Button style={{color:(selected === "ThreeScene") ? "black" : "white", width:"100%", fontSize:"18px" }} onClick={three_scene}>THREE.js</Button>
                    </Box>

                    <Box backgroundColor={(selected === "Notebook") ? "lightgrey" : "transparent"} width="100%" margin="10%">
                        <Button style={{color:(selected === "Notebook") ? "black" : "white", width:"100%", fontSize:"18px" }} onClick={nav_notebooks}>Notebooks</Button>
                    </Box>
                </Box>
        </Box>
    )
}

export default Sidebar