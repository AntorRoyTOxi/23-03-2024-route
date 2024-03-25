import { useLoaderData } from "react-router-dom";


const ShowPost = () => { 
     const show=useLoaderData(); 
 
    return (
        <div>
            <h1> this is show post : {show.title}  </h1>
        </div>
    );
};

export default ShowPost;