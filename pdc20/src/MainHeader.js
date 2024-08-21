import React from "react";
import FirstParag from "./FirstParag";
import SecondParag from "./SecondParag";
import ThirdParag from "./ThirdParag";

function MainHeader (){
    return(
        <div>
            <h1> Quick Start! </h1>
            <h2> Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h2>
            <FirstParag />
            <SecondParag />
            <ThirdParag />
        </div>
    );
}

export default MainHeader;
