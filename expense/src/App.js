import logo from './logo.svg';

import './App.css';

import { useState } from 'react';
import{ Typography, styled, Box, } from '@mui/material';




//components
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
const Header = styled(Typography)`

font-size: 46px;
color: #1565c0;
text-transform:uppercase;
text-decoration: overline underline;
margin-bottom: 10px;
`
const Component = styled(Box)`
  display: flex;
  background-image: url("https://image.lexica.art/full_jpg/a8bb1995-411a-411d-9f5f-cf67dd480c4e");
  width: 90%; /* Use a percentage value to make it responsive */
  padding: 10px;
  border-radius: 30px;
  margin: auto;

  & > div {
    flex: 1; /* Make the child divs take equal space */
    padding: 30px;
  }

  @media (max-width: 768px) { /* Adjust the screen width as needed */
    flex-direction: column; 
    width: 90%; /* Use a percentage value to make it responsive */
  padding: 10px;
  border-radius: 30px;
  margin: auto;

  }
`;

function App() {
  

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Bonus', amount: 1500 },
    { id: 5, text: 'racket', amount: -2000 }
  ])
 
  return (
    <Box className="App">
      <Header>Expense Handler</Header>
      <Component classname="responsive" >
<Box >
  <Balance transactions={transactions}/>
  <ExpenseCard transactions={transactions} />
  <NewTransactions setTransactions={setTransactions} />
</Box>
<Box>
  <Transactions transactions={transactions} setTransactions={setTransactions} />
</Box>
      </Component>
    </Box>
  );
}

export default App;
