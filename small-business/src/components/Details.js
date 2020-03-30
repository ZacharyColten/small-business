import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Divider, Container, Paper, Chip, Typography } from '@material-ui/core'
import GoogleMap from "./GoogleMap";


const Details = (props) => {
    let id = props.match.params.id
    const listing = props.listings.find(x => x.id == id)
    const [lat, setLat] = useState(30.266666);
    const [lng, setLng] = useState(-97.73333);

    useEffect(() => {
        async function google() {
            const url = `https://maps.google.com/maps/api/geocode/json?key=AIzaSyBlDLQSMTBDuG13543uFoyRHM0pTrbpbUU&address=${listing.address}`
            const response = await fetch(url);
            const data = await response.json();
            setLat(data.results[0].geometry.location.lat);
            setLng(data.results[0].geometry.location.lng);
        }
        google();
    });

    return (
        <div style={{ "display": "flex", "justify-content": "center", "align-items": "center", "margin": "20px" }}>
            <Container style={{ "maxWidth": "sm" }}>


                <Typography style={{ "fontSize": "30px", "display": "flex", "justify-content": "center", "align-items": "center", "margin": "20px" }}>
                    {listing.name}
                </Typography>
                <Typography style={{ "fontSize": "20px", "display": "flex", "justify-content": "center", "align-items": "center", "margin": "20px" }}>
                    {listing.address}
                </Typography>
                <Typography style={{ "fontSize": "20px", "display": "flex", "justify-content": "center", "align-items": "center", "margin": "20px" }}>
                    {listing.hours}
                </Typography>
                <Typography style={{ "display": "flex", "justify-content": "center", "align-items": "center", "margin": "20px" }}>
                    {listing.description}
                </Typography>
                <br></br>

                <GoogleMap lat={lat} lng={lng} />
            </Container>

        </div>
    )
}

export default Details