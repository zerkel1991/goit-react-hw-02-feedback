import PropTypes from 'prop-types';
import s from './StyleFriend.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ options }) {
  return (
    <ul className={s.list}>
      {options.map(e => (
        <FriendListItem
          key={e.id}
          avatar={e.avatar}
          name={e.name}
          isOnline={e.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  options: [],
};

FriendList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default FriendList;
