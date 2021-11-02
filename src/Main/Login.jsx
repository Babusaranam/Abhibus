// // import React, { Component } from 'react';
// // import axios from "axios"
// // class Login extends Component {

// //     render() {
// //         return (
// //             <div className="text3">
// //                 <form>
// //                     <input type="text" onChange={(event) => this.handelText(event)} > UserName</input>
// //                     <input type="text" onChange={(event) => this.handelText(event)} > Password</input>
// //                     <button type="bitton" onClick={() => this.handelSubmit()}  >Login</button>
// //                 </form>
// //             </div>
// //         );
// //     }
// // }

// // export default Login;


// // import React, { Component } from 'react'
// // import axios from "axios"

// // class Login extends Component {
// //     constructor() {
// //         super();
// //         this.state = {
// //             username: "",
// //             password: ""

// //         }
// //     }
// //     handleInputChange = (event) => {
// //         this.setState({
// //             [event.target.name]: event.target.value
// //         })

// //     }
// //     handelregister = () => {
// //         const { username, password } = this.state;


// //         axios.post("http://localhost:8081/login", {

// //             Username: username,
// //             Password: password
// //         })
// //             .then((response) => {
// //                 console.log({ response })

// //             })

// //     }
// //     render() {

// //         return (

// //             <div className="d-flex justify-content-center align-items-center login bg-light text-center box1">
// //                 <form >
// //                     <h5 className="mb-4">Login Form</h5>
// //                     <div>
// //                         <input
// //                             type="text"
// //                             className="form-control py-2"

// //                             name="username"
// //                             placeholder="username"
// //                             onChange={(event) => this.handleInputChange(event)}
// //                         // autocomplete="off"
// //                         // required
// //                         />
// //                     </div>
// //                     <div>
// //                         <input
// //                             className="form-control py-2"
// //                             type="password"
// //                             name="password"
// //                             placeholder="password"
// //                             onChange={(event) => this.handleInputChange(event)}
// //                         // autocomplete="off"
// //                         // required
// //                         />
// //                     </div>
// //                     <input
// //                         type="submit"
// //                         value="Login"
// //                         className="btn btn-success w-100"
// //                     />
// //                     <input
// //                         type="submit"
// //                         value="Register"
// //                         className="btn btn-warning w-100"
// //                         onClick={() => this.handelregister()}
// //                     />
// //                 </form>

// //             </div>

// //         )
// //     }
// // }
// // export default (Login);

// import React from 'react';
// import { useState } from 'react';
// import { Prev } from 'react-bootstrap/esm/PageItem';

// function Login() {
//     const [name, setName] = useState({ usernmae: "", password: "" });

//     handleInputChange = (event) => {
//         setName(PrevState => ({ ...PrevState, [event.target.name]: event.target.value }));
//     }




//     // handelregister = () => {
//     //     com
//     // }
//     return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center login bg-light text-center box1">
//                 <form >
//                     <h5 className="mb-4">Login Form</h5>
//                     <div>
//                         <input
//                             type="text"
//                             className="form-control py-2"
//                             name="username"
//                             placeholder="username"
                           
//                             onChange={(event) => this.handleInputChange(event)}
//                         // autocomplete="off"
//                         // required
//                         />
//                     </div>
//                     <div>
//                         <input
//                             className="form-control py-2"
//                             type="password"
//                             name="password"
//                             placeholder="password"
//                             onChange={(event) => this.handleInputChange(event)}
//                         // autocomplete="off"
//                         // required
//                         />
//                     </div>
//                     <input
//                         type="submit"
//                         value="Login"
//                         className="btn btn-success w-100"
//                     />
//                     <input
//                         type="submit"
//                         value="Register"
//                         className="btn btn-warning w-100"
//                         onClick={() => this.handelregister()}
//                     />
//                 </form>

//             </div>

//         </div>
//     );
// }

// export default Login;