import React from "react";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  const list = friends.map((item) => {
    return (
      <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        id={item.id}
        key={item.id}
      />
    );
  });

  return <ul className="friend-list">{list}</ul>;
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? "status online" : "status offline"}>O</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendList };
