import PropTypes from 'prop-types';
import s from './StyleFriend.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
