import React from "react";
import PropTypes, { exact } from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
        <li key={item.id} className="item">
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export { FriendList };
