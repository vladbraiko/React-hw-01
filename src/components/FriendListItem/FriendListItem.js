import React from "react";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? "status online" : "status offline"}>O</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
