
import PropTypes from 'prop-types';
import s from './Stats.module.css'
const FeedBackStats = ({good,neutral,bad,total,positive})=>(
  <div>
  <ul className={s.feedbackList}>
    <li><span>Good : {good}</span></li>
    <li><span>Neutral : {neutral}</span></li>
    <li><span>Bad : {bad}</span></li>
    <li><span>Total :{total}  </span></li>
    {positive > -1 && <li><span>Postive feedback :{positive} % </span></li>}
  </ul>
</div>

)


FeedBackStats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};


export default FeedBackStats
