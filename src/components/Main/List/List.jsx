import React, { useContext } from 'react'
import useStyles from '../List/styles'
import {List as MUList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'


const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

    return (
        <MUList dense = {false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide directon="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUList>
    )
}

export default List
