

import { Box, Typography, TextField, Button, styled} from '@mui/material'

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5, & > div, & > button {
    margin-top: 30px

}
`
const NewTranscations = () => {

    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter expense" />
            <TextField label="Enter amount"/>
            <Button variant="contained">Add Transaction</Button>

        </Container>

    )
} 

export default NewTranscations;