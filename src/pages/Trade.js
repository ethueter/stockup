import React from 'react';
import Grid from '@material-ui/core/Grid';

import { withAuthorization } from "../components/Session";


const Trade = () => {
    
    
    return (
        <Grid container spacing={2}>
            <p>I am for trading</p>
        </Grid>
    )
}

const condition = authUser =>!!authUser;

export default withAuthorization(condition)(Trade);