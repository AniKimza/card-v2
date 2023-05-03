import Card from '@mui/material/Card';
import { motion } from "framer-motion";
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { SearchBar } from './SearchBar';



export const CustomCard = () => {
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Stack height={'100vh'} alignItems={'center'} justifyContent={'center'} spacing={4}>
                    <Card sx={{ width: '50%', height: '50%', borderRadius: 7, padding: 4 }}>
                        <Stack height={'100%'} alignItems={'center'} justifyContent={'flex-start'}>
                            <Typography variant='h3' fontFamily={'Bruno Ace SC'} sx={{ textAlign: 'center', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {title}
                            </Typography>
                            <Stack direction={'row'} alignItems={'center'} spacing={5} sx={{ flex: 1 }}>
                                <Typography variant='h6' fontFamily={'Barlow, sans-serif'}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                                <img
                                    style={{ width: '35%', height: '70%', borderRadius: 10 }}
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                    alt="new"
                                />
                            </Stack>
                        </Stack>
                    </Card>
                    <SearchBar handle={handleTitle} title={title} />
                </Stack>
            </motion.div>
        </>
    );
}
{/* <Stack direction={'column'} spacing={1} alignItems={'center'} justifyContent={'flex-start'} height={'100%'}> */ }

{/* </Stack> */ }