
import data from '../../data/data.json'
import friends from '../../data/friends.json'
import transaction from '../../data/transactions.json'
import Statictics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import { Container } from './App.styled';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Statictics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Container>
    
)};
