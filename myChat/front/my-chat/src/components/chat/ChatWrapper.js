import socket from "./MySocketIo"
import {toast} from "react-toastify";
import ChatMessageForm from "./ChatMessageForm";


export default function ChatWrapper(){




    return(
        <>
            <h1>Chat</h1>
            <ChatMessageForm/>
        </>
    )
}