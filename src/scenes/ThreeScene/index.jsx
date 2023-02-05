import { Canvas } from "@react-three/fiber"
import { Box } from "@mui/material";
import Grid from "../../components/Grid"
import { OrbitControls } from "@react-three/drei"

const ThreeScene = () => {

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%">
        <Canvas style={{ width:"80%", height:"80%" }}>
            <OrbitControls />
            <ambientLight intensity={.5} /> 
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Grid />
        </Canvas>
        <h3>Click & Drag</h3>
        <script type="module" src="three.js"></script>
        </Box>
    )

}

export default ThreeScene;