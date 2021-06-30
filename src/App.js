import React from "react";
import Header from "./Components/Header";
import GlobalStyle from "./Styles/global";
import Board from "./Components/Board/index";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Header/>
    <Board/>
    <GlobalStyle/>
    </DndProvider>
  );
}

export default App;

