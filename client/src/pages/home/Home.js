import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "../shared/navigation/Navigation";
import ContestList from "./components/ContestList";

const Home = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <ContestList/>
        </BrowserRouter>
        
     );
}
 
export default Home;