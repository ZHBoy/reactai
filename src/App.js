import './App.css';
import './index.css'
import {useSelector} from "react-redux";
import React from "react";
import ComponentContentList from "./pages/home/list";
import HomeOptionsComponent from "./pages/home/options";
import TopBarComponent from "./pages/home/topbar/TopBar";

function App() {

    const count = useSelector(state => state.counter.value);

    return (
        <div>
            <TopBarComponent/>
            <HomeOptionsComponent/>
            <ComponentContentList optionId={count}/>
        </div>
    );
}

export default App;
