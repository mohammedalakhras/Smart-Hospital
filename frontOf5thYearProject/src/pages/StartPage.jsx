import TopNavBar from "../components/StartPage/TopNavBar";
import MainArea from "../components/StartPage/mainArea/mainArea";
import Footer from "../components/StartPage/footer/Footer";
import {useMediaQuery} from '@mui/material'
import {createContext } from 'react'
export const StartPageContext = createContext();
export default function StartPage() {
    const IsMobile = useMediaQuery('(max-width:800px)');
  return <>
    <StartPageContext.Provider value={IsMobile}>
        <TopNavBar />
        <MainArea />
        <Footer />
    </StartPageContext.Provider>
  </>;
}
