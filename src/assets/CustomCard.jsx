import { motion } from "framer-motion";
import { Stack, Card, Typography, Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { AnimationTxt } from "./AnimationTxt";



export const CustomCard = () => {
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const [isOpen, setIsOpen] = useState(true);

    const typo = [
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .',
        'It was popularised in the 1960s  release of Letraset sheets .'
    ]

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Stack height={'100vh'} alignItems={'center'} justifyContent={'center'} overflow={'hidden'}>
                    <Grid container justifyContent='center' height={'50%'}>
                        <Grid item xs={6}>
                            <motion.div
                                layout
                                data-isOpen={isOpen}
                                initial={{ borderRadius: 50 }}
                                style={{
                                    height: isOpen ? '50%' : '50px',
                                    width: isOpen ? '100%' : '50px',
                                    position: 'relative',
                                }}
                            >
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />
                                )}
                                <Card sx={{ borderRadius: 7, padding: 4, maxHeight: '100%' }} elevation={5}>
                                    <Grid container spacing={3} >
                                        <Grid item xs={12}>
                                            <Typography variant='h3' fontFamily={'Bruno Ace SC'} sx={{ textAlign: 'center', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: isOpen ? 1 : 0 }}>
                                                {title}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Box sx={{ height: '40%', overflow: 'scroll', '&::-webkit-scrollbar': { width: 0 } }}>
                                                {typo.map((item, index) => {
                                                    return <AnimationTxt key={index} index={index}>
                                                        <Typography variant='h5' fontFamily={'Josefin Sans, sans-serif'}>{item}</Typography>
                                                    </AnimationTxt>
                                                })}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <img
                                                style={{ width: '100%', borderRadius: 10 }}
                                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                                alt="new"
                                            />
                                        </Grid>
                                    </Grid>
                                </Card>
                            </motion.div>
                            <SearchBar handle={handleTitle} title={title} open={isOpen} setOpen={setIsOpen} />
                        </Grid>
                    </Grid>
                    {!isOpen && <motion.div
                        whileHover={title !== '' && { scale: 1.1 }}
                        whileTap={title !== '' && { scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        animate={{ scale: title !== '' ? 1 : 0.9 }}
                    ><Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => setIsOpen(!isOpen)}>Open Card</Button></motion.div>}
                </Stack>
            </motion.div>
        </>
    );
}
