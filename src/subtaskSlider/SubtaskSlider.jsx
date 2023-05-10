import React from 'react'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'

const SubtaskSlider = () => {


    // TODO this two arrays will be passed as props but we leave here for now

    const subImages = [
        'https://wallpapercave.com/wp/wp4471392.jpg',
        'https://wallpaperaccess.com/full/7228853.jpg',
        'https://wallpapercave.com/wp/wp4471362.jpg',
        'https://wallpaperaccess.com/full/1138975.jpg',
        'https://wallpaper-house.com/data/out/8/wallpaper2you_248125.jpg'
    ]

    const subTasks = [
        'Hello there this is your first subtask',
        'Hello there this is your second subtask',
        'Hello there this is your third subtask',
        'Hello there this is your fourth subtask',
        'Hello there this is your fifth subtask',
    ]

  return (
    <Stack justifyContent='center' alignItems='center' height='100vh'>
        <Card sx={{height: '50%', width: '50%', borderRadius: 5}}>
            <Stack direction='row' height={'100%'}>
                
                {subImages.map(
                    item => <img
                        key={item} 
                        src={item} 
                        style={{
                            width: `${100 / subImages.length}%`,
                            height: '100%',
                            objectFit: 'cover'
                        }} /> 
                    )}
            </Stack>
        </Card>
    </Stack>
  )
}

export default SubtaskSlider