
const UserCard = ({ school, fees }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>School: {school}</p>
      <p>Amount: {fees}</p>
    </div>
  );
};

export default UserCard;
