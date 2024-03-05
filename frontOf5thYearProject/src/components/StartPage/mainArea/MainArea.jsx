import {Box} from '@mui/material'

import WellcomSection from './wellocomSection/WellcomSection'
import VariantSection from './variantSection/VariantSection'
export default function MainArea() {

  return (
    <Box sx={{marginTop:'20px'}} >
        <WellcomSection />
        <VariantSection />
    </Box>
  )
}