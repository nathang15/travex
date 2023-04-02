import { Card, Box, Typography, Chip, Button, CardActions } from '@mui/material'
import { CardMedia } from '@mui/material'
import React from 'react'
import { LocationOn } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import Rating from '@mui/lab/Rating';
function Place({ places, selected, refProp }) {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (!places.name) {
    return null; // Do not render anything if name property is missing
  }
  return (

    <Card className='shadow-md p-2 rounded-md'>
        <CardMedia
          style={{ height: 350 }}
          image={places.photo ? places.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={places.name}
          className='rounded-md'
        />

        <div className='mt-2'>
          {places.name}
        </div>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(places.rating)} readOnly />
          <div className='font-normal text-sm' gutterBottom variant="subtitle1">
            {places.num_reviews} reviews
          </div>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <div className='font-normal text-sm'>Price</div>
          <div className='font-normal text-sm' gutterBottom variant="subtitle1">
            {places.price_level}
          </div>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <div className='font-normal text-sm'>Ranking</div>
          <div className='font-normal text-sm' gutterBottom variant="subtitle1">
            {places.ranking}
          </div>
        </Box>
        {places?.cuisine?.map(({ name }) => (
        <Chip
            key={name}
            size="small"
            label={name}
            sx={{
              marginRight: 1, // Adds a margin to the right of each chip
              marginTop: 1,
              fontSize: '0.8rem', // Adjusts the font size of the chip
              fontWeight: 'normal' // Makes the text normal weight
            }}
          />
        ))}

        {places?.address && (
          <Box className='mt-2' display="flex" justifyContent="space-between">
            <LocationOn className='text-gray-500'/>
            <div className='font-normal text-sm' gutterBottom variant="body2" color="textSecondary">
              {places.address}
            </div>
          </Box>
        )}         

        {places?.phone && (
          <Box className='mt-2' display="flex" justifyContent="space-between">
            <Phone className='text-gray-500' />
            <div className='font-normal text-sm' gutterBottom variant="body2" color="textSecondary">
              {places.phone}
            </div>
          </Box>
        )}

        <CardActions className=''>
          <Button size="small" color="primary" onClick={() => window.open(places.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(places.website, '_blank')}>
            Website
          </Button>
      </CardActions>      
    </Card>
  )
}

export default Place