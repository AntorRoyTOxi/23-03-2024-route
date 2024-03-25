import { useLoaderData } from "react-router-dom";
import People from "../People/People";
import './ManyPeople.css'

const ManyPeople = () => { 
      const people=useLoaderData();  
      
         
    return (
        <div className="Grid">
            { 
        people.map(result=><People result={result}  key={result.id}></People>)
        }
        </div>
    );
};

export default ManyPeople;