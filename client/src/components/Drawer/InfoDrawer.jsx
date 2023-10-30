
import { Drawer,Typography,Box } from "@mui/material";
import{Arrowback} from'@mui/icons-material';
const drawerStyle={
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none'
}


const InfoDrawer=({open,setOpen})=>{//oepn destructuring concepts

    const handleClose=()=>{
        setOpen(false);
    }
    return(
      <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx:drawerStyle}}
      style={{zIndex:1500}}
      >
      <Box>
          <Arrowback onClick/>
          <Typography>profile</Typography>
      </Box>
      <Box>

      </Box>
      </Drawer>
    )
}

export default InfoDrawer;