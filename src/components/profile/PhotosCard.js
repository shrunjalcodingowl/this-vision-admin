import React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, Typography, ImageList, ImageListItem } from '@mui/material';

// import img1 from '../../../assets/images/users/1.jpg';
// import img2 from '../../../assets/images/users/2.jpg';
// import img3 from '../../../assets/images/users/3.jpg';
// import img4 from '../../../assets/images/users/4.jpg';
// import img5 from '../../../assets/images/users/5.jpg';
// import img6 from '../../../assets/images/users/6.jpg';
// import img7 from '../../../assets/images/users/7.jpg';
// import img8 from '../../../assets/images/users/8.jpg';

const photos = [
  {
    img: '/images/users/1.jpg',
    id: 1,
  },
  {
    img: '/images/users/2.jpg',
    id: 2,
  },
  {
    img: '/images/users/3.jpg',
    id: 3,
  },
  {
    img: '/images/users/4.jpg',
    id: 4,
  },
  {
    img: '/images/users/5.jpg',
    id: 5,
  },
  {
    img: '/images/users/6.jpg',
    id: 6,
  },
  {
    img: '/images/users/7.jpg',
    id: 7,
  },
  {
    img: '/images/users/8.jpg',
    id: 8,
  },
  {
    img: '/images/users/1.jpg',
    id: 9,
  },
];

const PhotosCard = () => (
  <Card>
    <CardContent>
      <Box display="flex" alignItems="center">
        <Typography variant="h3" fontWeight="500">
          Photos
        </Typography>
      </Box>
      <ImageList cols={3} gap={20}>
        {photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <Image
              src={photo.img}
              alt={photo.img}
              loading="lazy" className='borderRadius'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </CardContent>
  </Card>
);

export default PhotosCard;
