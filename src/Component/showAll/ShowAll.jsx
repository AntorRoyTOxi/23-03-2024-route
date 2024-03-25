import { useLoaderData, useNavigate } from "react-router-dom";


const ShowAll = () => { 
     const result=useLoaderData(); 
 const navigate=useNavigate(); 
  const goBack=()=>{ 
       navigate(-1)
  }
    return (
        <div>
            <h1>Name: {result.name} </h1> 
            <button onClick={goBack}>Go back</button>
        </div>
    );
};

export default ShowAll;