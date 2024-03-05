import React, { useState, useStyles } from 'react'
import './appointment.css'
import Apdetails from './Apdetails'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


function Appointment() {


    const [data, setdata] = useState({
        fullname: '',
        phone: '',
        email: '',
        age: '',
        blood: '',
        gender: '',
    })

    // function InputEvent(event) {

    //     const { name, value } = event.target

    //     setdata((preValue) => {
    //         return {
    //             ...preValue,
    //             [name]: value
    //         }
    //     })

    // }

    function formSubmit() {

    }



    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

        return (
            <>

                <div className="container-fluid main_div ">
                    <div className="row" >
                        <div className="col-md-9 col-11 mx-auto " >
                            <div className="row">
                                <div className="col-md-7 pt-5 pt-lg-5 order-1 order-lg-1 ">
                                    <div className='shadow py-5 left_div' >
                                        <h2>Book your appointment</h2>
                                        <h5>We will confirm your appointment within 2 hours</h5>
                                        <br />
                                        <form onSubmit={formSubmit} className='my-auto'>
                                            <div className='row'>
                                                <div className='col-10 mx-auto' >
                                                    <div className='row' >
                                                        <div className='col-md-6 mx-auto order-1' >
                                                            <Apdetails class="fas fa-user-tie icon fa-3x fa-pull-left" label='Name' type='text' name='fullname' value={data.fullname} placeholder='Enter Name' />

                                                            <Apdetails class="fas fa-phone-volume icon fa-3x fa-pull-left" label='Phone' type='text' name='phone' value={data.phone} placeholder='Enter Phone Number' />

                                                            <Apdetails class="fas fa-tint icon fa-3x fa-pull-left" label='Blood Group' type='text' name='blood' value={data.blood} placeholder='Enter Blood Group' />

                                                        </div>

                                                        <div className='col-md-6 mx-auto order-2' >
                                                            <Apdetails class="fas fa-envelope-square icon fa-3x fa-pull-left" label='Email' type='text' name='email' value={data.email} placeholder='Enter Email' />

                                                            <Apdetails class="fas fa-user icon fa-3x fa-pull-left" label='Age' type='text' name='age' value={data.age} placeholder='Enter Age' />

                                                            <Apdetails class="fas fa-venus-mars icon fa-3x fa-pull-left" label='Gender' type='text' name='gender' value={data.gender} placeholder='Enter Gender' />


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                {/* <button class="btn btn-outline-primary" type="submit">Submit form</button> */}
                                                {/* <Button variant="outlined" onClick={handleClick}>Submit</Button> */}
                                                <Button variant="contained" color="primary" style={{backgroundColor:'#0046C0'}} onClick={handleClick}>Submit Form</Button>
                                                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                                    <Alert onClose={handleClose} severity="success">
                                                        Form submitted successfully</Alert>
                                                </Snackbar>


                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className=" col-md-4 pt-5 pt-lg-5  order-2 order-lg-2" >
                                    <div className='shadow py-5 right_div'>
                                        <h2>Working hours</h2>
                                        <ul id='app_ul'>
                                            <li>Monday <span>9:00 AM - 8:00 PM</span></li>
                                            <li>Tuesday <span>9:00 AM - 8:00 PM</span></li>
                                            <li>Wednesday <span>9:00 AM - 8:00 PM</span></li>
                                            <li>Thursday <span>9:00 AM - 8:00 PM</span></li>
                                            <li>Friday <span>9:00 AM - 8:00 PM</span></li>
                                            <li>Saturday <span>9:00 AM - 8:00 PM</span></li></ul>
                                        <p>-------------X--------------</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

export default Appointment
