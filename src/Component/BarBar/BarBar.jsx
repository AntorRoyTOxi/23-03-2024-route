import { useLoaderData } from "react-router-dom";
import Bar from "../Bar/Bar";

const BarBar = () => { 
     const dataload=useLoaderData(); 
  
    return (
        <div className="Grid">
         { 
            dataload.map(result=><Bar result={result} key={result.id}></Bar>)
         }
        </div>
    );
};

export default BarBar;