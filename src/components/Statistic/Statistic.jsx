import PropTypes from 'prop-types'; // ES6
import s from './StyleStat.module.css';
function Statistic({ title, stats }) {
  return (
    <section className={s.statistic}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(element => (
          <li className={s.ListItem} key={element.id}>
            <span className={s.label}> {element.label}</span>
            <span className={s.label}> {element.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.defaultProps = {
  stats: [],
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Statistic;
