import {Box} from '@mui/material'
import Advice from "./Advice"
import NewDiscover from "./NewDiscover"
import classes from './adviceSection.module.css'
import { useContext } from 'react'
import {StartPageContext} from '../../../../pages/StartPage'
export default function MainAdviceSection() {
  const IsMobile = useContext(StartPageContext);
  return (
        <Box className={classes.container}>
            <Advice IsMobile={IsMobile} />
            <NewDiscover IsMobile={IsMobile}/>
        </Box>
  )
}
