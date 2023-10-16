import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';



const Detail= styled(ListItem)`
 margin-top: 10px;
 border: 2px solid black;
 border-radius: 23px;
 
 `
const Transaction = ({ transaction, setTransactions, transactions }) => {
    const color = transaction.amount > 0 ? 'Green' : 'Red';
    const deleteTransaction = (id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== id))

    }

    return(
      <Detail style={{ background: `${color}`, color: '#fff'}}>
       <ListItemIcon>
        <RemoveCircleSharpIcon onClick={() => deleteTransaction(transaction.id)}/>
       </ListItemIcon>

       

       
      
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
      </Detail>

    )
}
export default Transaction;