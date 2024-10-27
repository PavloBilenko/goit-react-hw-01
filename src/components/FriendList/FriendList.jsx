import React from "react";

import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.wrapper}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <div className={s.friendsContainer}>
            <img className={s.image} src={avatar} alt="Avatar" width="48" />
            <p className={s.name}>{name}</p>
            <p
              className={`${s.status} ${
                isOnline ? s["statusOnline"] : s["statusOffline"]
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
