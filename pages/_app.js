import React, { useEffect, useState } from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
    const [layoutState, setLayoutState] = useState("layoutState");
    useEffect(() => {
        console.log(layoutState);
    }, []);

    return <Component {...pageProps} />;
};

export default App;
