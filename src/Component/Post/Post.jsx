import { useLoaderData } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";  
 import './Post.css'



const Post = () => { 
     const posted=useLoaderData();   
      
    return (
        <div className="Grid">
          {

            posted.map(element=><PostDetails element={element} key={element.id} ></PostDetails>)
          }
        </div>
    );
};

export default Post;