import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
 import Footer from "./Footer/Footer";



const Header = () => { 
     const navigation=useNavigation();
    return (
        <div> 
             <h1>  our website welcome </h1>
            <NavBar></NavBar> 
             { 
               navigation.state === 'loading'? <p> Loading now..... </p> : <Outlet></Outlet> 
              }
           
            <Footer></Footer>
            
                
        </div>
    );
};

export default Header;