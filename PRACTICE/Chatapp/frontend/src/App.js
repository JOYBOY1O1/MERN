import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/homepage";
import ChatPage from "./Pages/chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
