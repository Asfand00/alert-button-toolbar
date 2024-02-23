import React from "react";
import AlertButton from "./AlertButton";

function ToolBar() {
    return (
        <div>
            <h2>ToolBar:</h2>
            <AlertButton message="This is the first alert">First Button</AlertButton>
            <AlertButton message="This is the second alert">Second Button</AlertButton>
        </div>
    );
};

export default ToolBar