import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import "./App.css";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '1f665ef0-c46a-4fa1-a988-0eb89711272f',
         props.user.username, 
         props.user.secret
    );
   
   return ( <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
)}

export default ChatsPage