import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const User = ({user}) => { 
     const {id,name,email,phone}=user; 
      const addStyle={
        border:'2px solid green',
         margin:'10px', 
          padding:'10px', 
          borderRadius:'20px'
      }
    return (
        <div style={addStyle}>
              <h3> {name} </h3> 
                <p>Email: {email} </p> 
                <p>Phone:{phone} </p> 
                 <Link to={`/user/${id}`}> Show details</Link>
        </div>
    );
}; 
 
 User.propTypes={ 
     user:PropTypes.object
 }

export default User;