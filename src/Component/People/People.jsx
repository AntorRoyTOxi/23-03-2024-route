import './people.css'
import PropTypes from 'prop-types'; 
 import { Link } from 'react-router-dom';
const People = ({result}) => { 
         const {title,id}=result;
    return (
        <div className='Border' >
            <h4> Id:{id} </h4> 
             <h4> Title: { title } </h4> 
              <Link to={`/result/${id}`}> Click me  </Link>
        </div>
    );
};
People.propTypes={ 
     result:PropTypes.object
}
export default People;