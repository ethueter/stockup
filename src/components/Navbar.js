import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <Paper className="navbar">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab
                    label="Home"
                    href="/"
                ></Tab>
                <Tab
                    label="Portfolio"
                    href="/portfolio"
                >
                </Tab>
                <Tab
                    label="Trade"
                    href="/trade"
                ></Tab>
                <Tab
                    label="Research"
                    href="/research"
                ></Tab>
            </Tabs>
        </Paper>
    )
}

export default Navbar;