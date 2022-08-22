import PropTypes from 'prop-types'; // ES6

import s from './UserStyle.module.css';

function UserProfile({
  url,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className="{s.description}">
        <img src={url} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.name}>@{tag}</p>
        <p className={s.name}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers </span>
          <span className={s.label}> {followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views </span>
          <span className={s.label}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
UserProfile.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default UserProfile;
