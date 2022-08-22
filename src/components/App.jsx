import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transations from '../data/transactions.json';
import UserProfile from './UserProfile/UserProfile';
import Statistic from './Statistic/Statistic';
import FriendList from './Friends/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const userData = data;
export const App = () => {
  return (
    <div>
      <UserProfile
        url={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={userData} />
      <FriendList options={friends} />
      <TransactionHistory options={transations} />
    </div>
  );
};
