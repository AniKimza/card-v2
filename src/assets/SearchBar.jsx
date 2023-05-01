import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { motion } from "framer-motion";

export const SearchBar = (props) => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 900 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                onChange={props.handle}
                onplaceholder="Generate AI"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" disableRipple>
                <motion.div
                    whileHover={props.title !== '' && { scale: 1.1 }}
                    whileTap={props.title !== '' && { scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    animate={{ scale: props.title !== '' ? 1 : 0.9 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color='primary'
                        disabled={props.title === ''}
                    >
                        Generate AI
                    </Button>
                </motion.div>
            </IconButton>
        </Paper>
    );
}
