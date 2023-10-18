import {Box, Typography, Divider, List } from "@mui/material";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";


const whiteFontStyle = {
    color: "white",
  };

const Transactions = ({ transactions, setTransactions }) => {
    const [localTransactions, setLocalTransactions] = useState([]);

    useEffect(() => {
      // Load transactions from local storage when the component mounts
      const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
      setLocalTransactions(storedTransactions);
    }, []);
  
    useEffect(() => {
      // Save transactions to local storage whenever transactions change
      localStorage.setItem("transactions", JSON.stringify(localTransactions));
    }, [localTransactions]);

    return (
        <Box classname="responsive" >
            <Typography variant="h5"  style={whiteFontStyle}><b>Transactions History</b></Typography>
            <Divider />
           
            <List>
                {
                    transactions.map(transaction => (
                    <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>

                    ))

                    
                }

            </List>
              <List>
    {localTransactions.map((transaction) => (
      <Transaction
        key={transaction.id}
        transaction={transaction}
        setTransactions={setLocalTransactions}
        transactions={localTransactions}
      />
    ))}
  </List>
        </Box>
    )

    }

export default Transactions;