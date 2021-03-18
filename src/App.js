import { ChatEngine, ChatFeed } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="32282cd8-dd44-4998-9d4e-66bb26673dba"
            userName="chapa"
            userSecret="chapa"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

