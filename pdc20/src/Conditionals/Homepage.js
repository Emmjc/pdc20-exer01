import React from "react";
import UserGreetings from "./UserGreetings";

function HomePage(){
    return(
        <div>
            <UserGreetings isLoggedIn={false}/>
        </div>
    );
}
export default HomePage;