import { useLoaderData } from "react-router-dom";


const PeopleDetails = () => { 
     const details=useLoaderData(); 
           const {title}=details;
    return (
        <div>
            <h1> this is shanto kumar roy {title} </h1>
        </div>
    );
};

export default PeopleDetails;