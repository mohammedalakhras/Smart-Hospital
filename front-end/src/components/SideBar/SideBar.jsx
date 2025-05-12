import {Drawer} from '@mui/material'
import SideBarContent from './SideBarContent/SideBarContent'
import { useContext } from 'react'
import { MainContext } from '../../pages/App'
export default function SideBar() {
    const {IsMobileValue,  isOpenValue} = useContext(MainContext)
    const [isSideBarOpen , setIsSideBarOpen] = isOpenValue
    const [isMobile ]= IsMobileValue
  return (
    <>
    {!isMobile && <Drawer
          variant="permanent"
          sx={{
            height:'90.5vh' , 
            "& .MuiDrawer-paper": {
              backgroundColor: "#68C1C2",
              overflow: "hidden",
              position: "static",
              width:"240px" ,
              pt: "7px",
            },
          }}
        >
            <SideBarContent />
        </Drawer>}
    {isMobile && <Drawer
          open={isSideBarOpen}
          onClose={()=>{setIsSideBarOpen(false)}}
          anchor='right'
          sx={{ 
            "& .MuiDrawer-paper": {
              backgroundColor: "#68C1C2",
              overflow: "hidden",
              width:"240px" ,
              pt: "7px",
            },
          }}
        >
            <SideBarContent />
        </Drawer>}
    </>
  )
}
