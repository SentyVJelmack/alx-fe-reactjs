import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const users = useContext(UserContext); // Get users from context

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="user-profile" style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Bio: {user.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
