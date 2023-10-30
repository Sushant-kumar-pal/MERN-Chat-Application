import LoginDialog from "./accounts/LoginDialog";
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import ChatDialog from "./chat/ChatDialog";
import AccountProvider from "../context/accountProvider";
import { useContext } from "react";
import { AccountContext } from "../context/accountProvider";

const Component=styled(Box)`
  height:120vh;
  background-color:#DCDCDC;


`
const Header=styled(AppBar)`
    height:15px;
    background-color:#00A884;
    box-shadow:none;

`

const LoginHeader=styled(AppBar)`
    height:220px;
    background-color:#00bfa5;
    box-shadow:none;

`

const Messenger=()=>{
   const {account} =useContext(AccountContext);

    return(

       <Component>
            {
            account?
            <>

           <Header>
            <Toolbar>

            </Toolbar>
           </Header>


            <ChatDialog />
            </>
            :
            <>
             <LoginHeader>
            <Toolbar>

            </Toolbar>
            </LoginHeader>
           <LoginDialog/>
           </>
          }  

        </Component>
       
    )
}

export default Messenger;