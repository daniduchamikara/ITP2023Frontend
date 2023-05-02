import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';

const initialValue = {
    "customerName": "",
    "vehicleId": "",
    "dateTime": "",
    "driverName": "",
    "location": "",
    "driverId": "",
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditVehicle = () => {
    const [user, setUser] = useState(initialValue);
    const {
        customerName,
        vehicleId,
        dateTime,
        driverName,
        location,
        driverId} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers('api/trip-schedule/'+id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser('api/trip-schedule/'+id, user);
        navigate('/schedule');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Schedule</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Customer Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='customerName' value={customerName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Vehicle Reg Plate Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='vehicleId' value={vehicleId} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date & Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateTime' value={dateTime} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Driver Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='driverName' value={driverName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Pickup Location</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='location' value={location} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit</Button>
            </FormControl>
        </Container>
    )
}

export default EditVehicle;