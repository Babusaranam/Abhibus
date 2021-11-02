import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Nav extends Component {
    render() {
        return (
            <>
                <nav className=" d-flex text1">
                    <ul className=" abhi">
                        <Link to="/Home"> <img src="https://static.abhibus.com/img/abhilogos/logo1.png" alt="abhibus" width="100px" height="40px" /></Link>
                    </ul>

                    <ul className="nav nav-pills sub">
                        <Link className="m-2" to="/Offers">Offers</Link>
                        <Link className="m-2" to="/Gfr">GetFreeRides</Link>
                        <Link className="text-secondary my-2" to="/Login">Login</Link>


                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="Mbook" role="button" aria-haspopup="true" aria-expanded="false">My Bookings</Link>
                            <div className="dropdown-menu">
                                <   Link className="dropdown-item" to="/offers">Offers</Link>
                                <Link className="dropdown-item" to="/Gfr"> action</Link>
                            </div>
                        </li>

                    </ul>





                </nav>
            </>
        );
    }
}

export default Nav;