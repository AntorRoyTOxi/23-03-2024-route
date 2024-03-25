import { useRouteError } from "react-router-dom"; 
 import { Link } from "react-router-dom";


const Oopps = () => { 
     const  error=useRouteError(); 
    
    return (
        <div>
            <h1> Oops!!!</h1> 
             <h3>{error.statusText || error.massage} </h3> 
              <Link to="/"> <button> back Home </button></Link>
        </div>
    );
};

export default Oopps;