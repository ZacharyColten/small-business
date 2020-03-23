import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import Details from '../containers/Details'
 
const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome</h4>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>{listing["name"]}</TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing