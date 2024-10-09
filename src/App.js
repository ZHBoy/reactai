import {useSelector} from "react-redux";
import React from "react";
import VideoPlayer from "./pages/short/video";

import './App.css'

function App() {

    const count = useSelector(state => state.counter.value);

    return (
        <div className={"app-container"} >
            {/*<TopBarComponent/>*/}
            {/*<div style={{display: 'flex', justifyContent: 'space-between'}}>*/}
            {/*    <HomeOptionsComponent/>*/}
            {/*    <ComponentContentList optionId={count}/>*/}
            {/*</div>*/}

            <VideoPlayer src={'https://bantang.nuojing.club//landing-h5/20240606-104724.mp4'}/>

        </div>
    );
}

export default App;
