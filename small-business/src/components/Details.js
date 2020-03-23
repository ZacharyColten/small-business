// import React from 'react'
// import cars from '../cars.json'
// import { Card, CardContent, CardActions, Divider, Container, Paper, Chip, Typography } from '@material-ui/core'
// // Container, Paper, Chip //

// const Car = (props) => {
//     let id = props.match.params.id
//     const car = cars.find(x => x.id == id)
//     return (
//         <div style = {{"display":"flex", "justify-content":"center", "align-items":"center"}}>
//             <Container style = {{"maxWidth":"sm"}}>
//                 <Paper elevation={3}>
//             <Card style = {{"minWidth":"275"}}>
//                 <CardContent>
//                 <Typography style = {{"fontSize": "14", "display": 'inline-block',
//     "margin": '2px'}}>
//           {car.Name}
          
//         </Typography>
//                 <Chip label={Object.keys(car)[0] + ": " + car.id}/>
//                 <Chip label={Object.keys(car)[1] + ": " + car.Name}/>
//                 <Chip label={Object.keys(car)[2] + ": " + car.Miles_per_Gallon}/>
//                 <Chip label={Object.keys(car)[3] + ": " + car.Cylinders}/>
//                 <Chip label={Object.keys(car)[4] + ": " + car.Displacement}/>
//                 <Chip label={Object.keys(car)[5] + ": " + car.Horsepower}/>
//                 <Chip label={Object.keys(car)[6] + ": " + car.Weight_in_lbs}/>
//                 <Chip label={Object.keys(car)[7] + ": " + car.Acceleration}/>
//                 <Chip label={Object.keys(car)[8] + ": " + car.Year}/>
//                 <Chip label={Object.keys(car)[9] + ": " + car.Origin}/>
//         </CardContent>
//         </Card>
//         </Paper>
//         </Container>
//     </div>
//     )
// }

// export default Car