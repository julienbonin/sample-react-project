import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import { data } from "../../data/mockData";
import ControlPanel from "../../components/ControlPanel"
import { useState } from "react";


const Dashboard = () => {
    const [state_data, StateData] = useState(data)
    console.log("Dashboard")
    console.log(typeof state_data)
    console.log(typeof [])
    return (

            <Box style={{display:"flex", flexDirection:"column", height:"100%", backgroundColor:"#141b2d"}}>
                <h2 style={{textAlign:"center", color:"#ffffff", marginTop:"50px", fontFamily:"sans-serif"}}>Analytics</h2>
                
                <Box style={{display:"flex", height:"100%", alignItems:"center", justifyContent:"space-evenly"}}>
                        <Box style={{display:"flex", height:"85%", width:"100%", marginLeft:"50px", marginRight:"50px", backgroundColor:"#1F2A40" }}>
                            <LineChart data={state_data}/>
                        </Box>
                        <Box style={{display:"flex", height:"85%", width:"100%", marginLeft:"50px", marginRight:"50px", backgroundColor:"#1F2A40" }}>
                            <ControlPanel data={state_data} update_data={StateData}/>
                        </Box>
                </Box>
            </Box> 
    )
}

export default Dashboard;