import client from "@/app/client";
import urlFor from "@/app/imageUrlBuilder";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
export async function getAttractionById(id) {
    const attraction = await client.fetch(`*[_type == "attraction" && _id == "${id}"]`);
    console.log(attraction)
    try {
        return attraction

    } catch (error) {
        return { err: error }
    }
}
export default async function Attraction({ params }) {
    const { id } = params
    const attraction = await getAttractionById(id)
    console.log('fffff', attraction[0])
    return (
        <Container maxWidth="lg" sx={{ height: '100vh' }}>
            <Box p={2} sx={{ bgcolor: '#F5F5F5', height: '100vh' }} >
                <img src={urlFor(attraction[0].coverimage).width(200).url()} />
                <Typography variant="h4"> {attraction[0].name}</Typography>
                <Typography variant="h6"> {attraction[0].latitude}</Typography>
                <Typography variant="h6"> {attraction[0].longitude}</Typography>
                <Typography variant="h6"> {attraction[0].Detail}</Typography>

            </Box>

        </Container>

    )
} 