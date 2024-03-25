import './Postdetails.css' 
 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const PostDetails = ({element}) => { 
  
    return (
        <div className='Border' >
             <h4> User Id: {element.id} </h4> 
              <h4> Title:{element.title} </h4> 
               <Link to={`/click/${element.id}`}> Click Me </Link>
        </div>
    );
};
PostDetails.propTypes={ 
     element:PropTypes.object
}
export default PostDetails;