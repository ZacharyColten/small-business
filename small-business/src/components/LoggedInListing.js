import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddListing from '../containers/AddListing'
import { Link } from 'react-router-dom'

const LoggedInListing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <AddListing />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name (click for map/details)</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, idx) => (
                        <TableRow key={listing.id}>
                            <TableCell style={{ "color": "#FF8C00" }}><Link to={`/details/${listing.id}`}>{listing.name}</Link></TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    // add onClick method here
                                    onClick={() => props.deleteListing(idx)}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default LoggedInListing

