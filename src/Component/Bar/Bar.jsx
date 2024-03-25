import './Bar.css'
 import PropTypes from 'prop-types';  
  import { Link } from 'react-router-dom'; 
   import { useNavigate } from 'react-router-dom';
const Bar = ({result}) => { 
     const {name,email,body,id}=result;  
      const navigate = useNavigate(); 
      
     
     
      const ShowDetails=()=>{ 
      navigate(`/show/${id}`)
        
      } 
      
    return (
        <div className='Border'> 
             <h4> Name: {name} </h4> 
              <h4> Email:{email} </h4> 
               <h4> Body: {body}  </h4> 
                <Link to={`/show/${id}`}> Show more </Link> 
                  <button onClick={ShowDetails}> click btn </button> 
               
            
        </div>
    );
};
Bar.propTypes={
    result:PropTypes.object
}
export default Bar;