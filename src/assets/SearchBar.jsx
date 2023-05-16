import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { motion } from "framer-motion";

export const SearchBar = ({ open, handle, title, setOpen } = props) => {


    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '45%',
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#606368',
                opacity: open ? 1 : 0
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                onChange={handle}
                placeholder="Write request here"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" disableRipple>
                <motion.div
                    whileHover={title !== '' && { scale: 1.1 }}
                    whileTap={title !== '' && { scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    animate={{ scale: title !== '' ? 1 : 0.9 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={title === ''}
                        style={{
                            backgroundColor: title === '' ? '#343541' : null,
                        }}
                        onClick={() => setOpen(!open)}
                    >
                        Generate AI
                    </Button>
                </motion.div>
            </IconButton>
        </Paper>
    );
}      