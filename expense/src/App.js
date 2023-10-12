import logo from './logo.svg';
import './App.css';
import{ Typography, styled,Box } from '@mui/material';
//components
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTranscations from './components/NewTranscations';
const Header = styled(Typography)`
margin: 10px 0;
font-size: 36px;
color: purple;
text-transform: uppercase;

`

function App() {
  return (
    <Box className="App">
      <Header>Expense Handler</Header>
      <Box>
<Box>
  <Balance />
  <ExpenseCard />
  <NewTranscations />
</Box>
<Box></Box>
      </Box>
    </Box>
  );
}

export default App;
