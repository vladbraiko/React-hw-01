import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export { FriendList };
