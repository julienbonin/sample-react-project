import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./scenes/Dashboard"
// import { Box, Button} from "@mui/material";
import Sidebar from "./scenes/global/Sidebar"
import Topbar from './scenes/global/Topbar'
import ThreeScene from './scenes/ThreeScene'
import Notebook from './scenes/Notebook'
import Signup from './scenes/Signup';
function App() {
  return (
	<BrowserRouter>
    	<div style={{display:"flex", flexDirection:"row", width:"100%", height:"100%"}}>
    		<Sidebar />
      		<div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
      			<Topbar />
      			
          			<Routes >
					  	<Route path="/Dashboard" element={<Dashboard />} />
						<Route path="/Signup" element={<Signup />} />
						<Route path="/ThreeScene" element={<ThreeScene />} />
            			<Route exact path="/Notebook" element={<Notebook />} />
						<Route path="/" element={<Dashboard />} />
          			</Routes>
      		</div>
      	</div>
	</BrowserRouter>

  )
}

export default App;
