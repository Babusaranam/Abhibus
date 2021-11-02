// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { withRouter } from 'react-router';

// class Body extends Component {
//     constructor() {
//         super()
//         this.state = {
//             source: "",
//             destination: "",
//             error: true
//         }

//     }
//     handelText = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handelSearch = () => {
//         const { source, destination, routelist } = this.state

//         const respo = axios.get(`http://localhost:8081/routecheck/${source}/${destination}`)
//             .then((response) => {
//                 console.log({ response })
//                 if (response.status === 200) {
//                     this.props.history.push(`/bus-search/${source}/${destination}`)
//                 } else {
//                     this.setState({
//                         error: response.data
//                     })
//                 }
//             })
//     }

//     render() {
//         const { error } = this.state;

//         return (

//             < div>
//                 <div>
//                     <h1>Book Bus Tickets</h1>
//                     <p className="m-4">
//                         <Link className="bg-danger text-white rounded-lg m-3 p-1" to="/Bus">Bus</Link>
//                         <Link className="bg-danger text-white rounded-lg m-3 p-1" to="/Trains">Trains</Link>
//                         <Link className="bg-danger text-white  rounded-lg m-3 p-1" to="/Hotels">Hotels</Link>
//                     </p>


//                     <form>
//                         <input className="rounded-lg" type="text" name="source" placeholder="leaving from" onChange={(event) => this.handelText(event)} />
//                         <input className="rounded-lg" type="text" name="destination" placeholder="leaving from" onChange={(event) => this.handelText(event)} />
//                         {/* <input className="rounded-lg" type="date" placeholder="Date of Journey" />
//                     <input className="rounded-lg " type="date" placeholder="Date of Return optional" /> */}
//                         <button className="rounded-lg bg-danger text-white " type="button" onClick={() => this.handelSearch()}>Search</button>
//                         <p>
//                             {error ? error : ""}
//                         </p>
//                     </form>
//                 </div>
//                 <div>
//                     {/* {room.map((item) => {
//                         return (
//                             <div>

//                                 {item.id}  <button type="button" onClick={(item) => this.handelClick(item)} >button</button>
//                             </div>
//                         )
//                     })} */}
//                 </div>
//             </div>

//         );
//     }
// }

// export default withRouter(Body);


import React from 'react';
import { useState } from 'react';
const [source, setsource] = useState("")
const [destination, setdestination] = useState("")
const [error, seterror] = useState(true)
const Body = () => {
    return (
        <div>
            < div>
                <div>
                    <h1>Book Bus Tickets</h1>
                    <p className="m-4">
                        <Link className="bg-danger text-white rounded-lg m-3 p-1" to="/Bus">Bus</Link>
                        <Link className="bg-danger text-white rounded-lg m-3 p-1" to="/Trains">Trains</Link>
                        <Link className="bg-danger text-white  rounded-lg m-3 p-1" to="/Hotels">Hotels</Link>
                    </p>


                    <form>
                        <input className="rounded-lg" type="text" name="source" placeholder="leaving from" onChange={(event) => this.handelText(event)} />
                        <input className="rounded-lg" type="text" name="destination" placeholder="leaving from" onChange={(event) => this.handelText(event)} />
                        <input className="rounded-lg" type="date" placeholder="Date of Journey" />
                        <input className="rounded-lg " type="date" placeholder="Date of Return optional" />
                        <button className="rounded-lg bg-danger text-white " type="button" onClick={() => this.handelSearch()}>Search</button>
                        <p>
                            {error ? error : ""}
                        </p>
                    </form>
                </div>
                <div>
                    {room.map((item) => {
                        return (
                            <div>

                                {item.id}  <button type="button" onClick={(item) => this.handelClick(item)} >button</button>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Body;