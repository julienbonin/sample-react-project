import { Slider } from "@mui/material";
import Box from '@mui/material/Box';

const findIndex = (array, label) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]["day"] === label) { return i }
  }
  return -1
}


const AdjusterRow = ({label, data, update_data, default_val}) => {
  
  var copy = data.map((x) => x)
  var i = findIndex(copy, label)
  const change = (e, val) => { copy[i]["degress"]=val; update_data(copy);  }
  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                <h4 style={{minWidth:"20%", margin:"auto", textAlign:"center", color:"#ffffff"}}>{label}</h4>
                <div style={{width:"80%"}}>
                  <Slider
                      aria-label="Temperature"
                      defaultValue={default_val}
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={0}
                      max={100}
                      onChange={change}
                  />
                </div>
    </Box>
  )
}


const ControlPanel = ({data, update_data}) => {  

  return (
        <div style={{display:"flex", flexDirection:"column", height:"100%", width:"100%", marginRight:"50px", justifyContent:"space-evenly"}}>
            <AdjusterRow label="Monday" data={data} update_data={update_data} default_val={50} />
            <AdjusterRow label="Tuesday" data={data} update_data={update_data} default_val={60} />
            <AdjusterRow label="Wednesday" data={data} update_data={update_data} default_val={55} />
            <AdjusterRow label="Thursday"  data={data} update_data={update_data} default_val={80} />
            <AdjusterRow label="Friday"  data={data} update_data={update_data} default_val={70} />
            <AdjusterRow label="Saturday" data={data} update_data={update_data} default_val={60} />
            <AdjusterRow label="Sunday" data={data} update_data={update_data} default_val={65} />
        </div>
  );
};

export default ControlPanel;