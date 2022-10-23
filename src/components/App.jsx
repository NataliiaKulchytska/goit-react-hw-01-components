import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendList/Friends';
import { Transaction } from './TransactionHistory/Transaction';


import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import {Container } from './App.styled';

export const App = () => {
  return (
    <Container>
  
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />      
      <Friends friends={friends} />
      <Transaction items={transactions} />
    </Container>
  
  );
};