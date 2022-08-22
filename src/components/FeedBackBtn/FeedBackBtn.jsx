import s from './Btn.module.css'
import PropTypes from 'prop-types';


const FeedBackBtn = ({addGood,addNeutral,addBad})=>(
<ul className={s.buttonList}>
  <li className='buttonListItem'><button type='button' onClick={addGood}>Good</button></li>
  <li className='buttonListItem'><button type='button' onClick={addNeutral}>Neutral</button></li>
  <li className='buttonListItem'><button type='button' onClick={addBad}>Bad</button></li>

</ul>
)

FeedBackBtn.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,

};
export default FeedBackBtn
