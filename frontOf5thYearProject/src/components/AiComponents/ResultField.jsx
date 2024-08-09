import { BarChart } from "@mui/x-charts/BarChart";
import {Box} from "@mui/material"
export default function ResultField() {
  return (
    <Box sx={{width:'80%' , m:'auto' , mt:'30px'}}>
      <BarChart
       borderRadius={37}
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C", "bar D"],
            scaleType: "band",
            colorMap: {
              type: 'piecewise',
              thresholds: [0],
              colors: ['red', 'green'],
            }
          },  
        ]}
        yAxis={[{
          colorMap: {
            type: 'continuous',
            min: 0,
            max: 100,
            color: ['#2DC7DC', '#2AB977'],
          }
        }]}
        series={[
          {
            data: [50, 40, 100, 54],
          },
        ]}
        width={400}
        height={500}
      />
    </Box>
  );
}
