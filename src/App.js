import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/Transactions/TransactionHistory";
import user from "./json/user-data.json";
import stats from "./json/statistic-data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

function App() {
  return (
    <React.Fragment>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </React.Fragment>
  );
}

export { App };
