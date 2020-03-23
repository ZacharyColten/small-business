import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddCar extends Component {
    state = {
        open: false,
        name: "",
        description: "",
        hours: "",
        address: ""
    }
    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.carTotal + 1
        delete payload.open
        this.props.addListing(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: "",
                description: "",
                hours: "",
                address: ""
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Listing:</h1>
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Listing</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="hours"
                                    placeholder="Hours"
                                    value={this.state.hours}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="address"
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChange={this.handleTextChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddCar