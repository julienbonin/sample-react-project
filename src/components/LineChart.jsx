import { ResponsiveBar } from '@nivo/bar'

const LineChart = ({data}) => {

  return (
   
        <ResponsiveBar
            data={data}
            keys={["degress"]}
            indexBy="day"
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ 
              type: "linear"
            }}
            colors="#3182CE"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "degrees",
                legendPosition: "middle",
                legendOffset: -40
    
            }}
            theme={{ textColor:"#ffffff"}}
            minValue={0}
            maxValue={100}
            minHeight="100%"
        />

  );
};

export default LineChart;