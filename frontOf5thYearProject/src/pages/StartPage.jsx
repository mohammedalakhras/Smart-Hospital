import TopNavBar from "../components/StartPage/TopNavBar";
import MainArea from "../components/StartPage/mainArea/mainArea";
import {useMediaQuery} from '@mui/material'
import {createContext } from 'react'
export const StartPageContext = createContext();
export default function StartPage() {
    const IsMobile = useMediaQuery('(max-width:600px)');
  return <>
    <StartPageContext.Provider value={IsMobile}>
        <TopNavBar />
        <MainArea />
    </StartPageContext.Provider>
  </>;
}
