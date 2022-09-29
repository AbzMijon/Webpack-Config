import React from "react"
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <RootRoute/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;