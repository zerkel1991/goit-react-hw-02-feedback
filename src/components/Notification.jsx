
import PropTypes from 'prop-types';


const Notification = ({text}) =>{
  return (
<span>{text}</span>
)}

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};



  export default Notification
