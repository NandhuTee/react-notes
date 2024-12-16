import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ name, age}) => {
  return (
    <div>
      <h2>Profile Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default ProfileCard;
