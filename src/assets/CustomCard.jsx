import { motion } from "framer-motion";
import { Stack, Card, Typography, Box, Grid } from '@mui/material';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { AnimationTxt } from "./AnimationTxt";



export const CustomCard = () => {
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

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
            {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            > */}
                <Grid direction='row' container alignItems='space-around' justifyContent='center' height={'50%'} >
                    <Grid item xs={6}>
                    <Card sx={{  borderRadius: 7, padding: 4, maxHeight: '50%' }} elevation={5}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Typography variant='h3' fontFamily={'Bruno Ace SC'} sx={{ textAlign: 'center', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Box sx={{ height: '50%', overflow: 'scroll', '&::-webkit-scrollbar': { width: 0 }, '&::-webkit-scrollbar-thumb': { backgroundColor: '#1E1E1E' } }}>
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
                    <SearchBar handle={handleTitle} title={title} />
                    </Card>
                    </Grid>
                    </Grid>
            {/* </motion.div> */}
        </>
    );
}
