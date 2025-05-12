import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Chip } from "@mui/material";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export default function ResultField({ data }) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (data.length > 0) {
      // eslint-disable-next-line react/prop-types
      const result = data[0].confidences.map((ele) => {
        return { label: ele.label, confidence: ele.confidence };
      });
      setResult(result);
      console.log(result);
    }
  }, [data]);
  return (
    <Box sx={{ width: "90%", m: "auto", mt: "30px" }}>
      {result.length > 0 && (
        <BarChart
          borderRadius={37}
          xAxis={[
            {
              id: "barCategories",
              data: [
                result[0].label,
                result[1].label,
                result[2].label,
                result[3].label,
              ],
              scaleType: "band",
              colorMap: {
                type: "piecewise",
                thresholds: [0],
                colors: ["red", "green"],
              },
            },
          ]}
          yAxis={[
            {
              colorMap: {
                type: "continuous",
                min: 0,
                max: 100,
                color: ["#2DC7DC", "#2AB977"],
              },
            },
          ]}
          series={[
            {
              data: [
                result[0].confidence,
                result[1].confidence,
                result[2].confidence,
                result[3].confidence,

              ],
            },
          ]}
          width={500}
          height={500}
        />
      )}
      {result.length === 0 && (
        <Box sx={{ position: "relative" , height:'100%' }}>
          <Chip
            color="error"
            label="لا يوجد بيانات "
            sx={{ position: "absolute", top: "200px", right: "45%" }}
          />
        </Box>
      )}
    </Box>
  );
}
