import React from 'react'
import { NavLink } from 'react-router-dom'
import Image1 from './bg1.jpg'
import './service.css'
import './icofont/icofont.min.css'

function Card(props) {



    return (
        <>

            <div className='col-md-3 col-10 mx-auto maindiv'>

                <div className="card cardEvent card__img">
                    <div className='mydiv2'>
                        {/* <i className="myiconss2 icofont-doctor"></i> */}
                        <i id="myiconss2" className={props.icon}></i>
                    </div>

                    <div className='icondiv'>
                        {/* <i className="myiconss icofont-doctor"></i> */}
                        <i id="myiconss" className={props.icon}></i>
                    </div>



                    <div className="card-body">
                        <h5 className="card-title" >{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti voluptates nesciunt!</p>

                        <div className='card__text'>
                            <h3 className='card__title' style={{fontWeight: 'bolder'}}>{props.title}</h3>
                            <p className='card__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam?</p>
                            <NavLink to="/getAppointment" className="btn btn-primary" >Get Appointment</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
