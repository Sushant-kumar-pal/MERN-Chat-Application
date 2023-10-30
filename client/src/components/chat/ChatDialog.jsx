import { Dialog, Box ,styled} from "@mui/material";
//componenets

import Menu from './Menu/Menu'; 
import EmptyChat from "./chat/EmptyChat"; 

const Component=styled(Box)`
display:flex;

`
const LeftComponent=styled(Box)`
min-width:450px;

`
const RightComponent=styled(Box)`
width:73%;
min-width:300px;
height=100%;
border-left:1px solid rgba(0,0,0,14);

`
const dialogStyle = {
  height: '95%',
  margin: '20px',
  borderRadius: 0,
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
};

const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      min-width={'md'}
    >
        <Component>
            <LeftComponent>
                 <Menu/>
            </LeftComponent>

            <RightComponent>
                <EmptyChat/>
            </RightComponent>
        </Component>
    </Dialog>
  );
}

export default ChatDialog;
