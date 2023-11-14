

import Image from 'next/image'
import styles from './page.module.css'
import urlFor from './imageUrlBuilder';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import client from './client';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export async function getData() {
  const attraction = await client.fetch(`*[_type == "attraction"]`);
  try {
    return attraction

  } catch (error) {
    return { err: error }
  }
}
export default async function Home({ }) {
  const attractions = await getData()
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        {attractions.length > 0 && (
          <Grid container spacing={3}>
            {attractions.map((a) => {
              return (
                <Grid key={a._id} lg={3} md={4} item xs={12}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <img src={urlFor(a.coverimage).width(200).url()} />
                      <Typography variant='h5'>{a.name}</Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {a.latitude}
                      </Typography>
                      <Typography variant="body2">
                        {a.longitude}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button href={`/attraction/${a._id}`} size="small">See More</Button>
                    </CardActions>

                  </Card>
                </Grid>
              )
            })}
          </Grid>
        )}
      </Box>
    </Container>

  )
}
