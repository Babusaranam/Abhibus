import React, { Component } from 'react'
import axios from 'axios';

export default class Hotels extends Component {
    constructor() {
        super();
        this.state = {
            hotels: []
        }
    }
    componentDidMount() {
        const respo = axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((respo) => {
                console.log("a", respo.data)
                this.setState({
                    hotels: respo.data
                })
            })

    }
    handelText = () => {
        this.setState({

        })

    }
    render() {

        return (
            <>
                <h1 className="text-center">
                    hello Welcome To My Hotels
                </h1>
                <div>
                    hello click on the button to book the hotel
                    <button type="button" className="btn-primary" onClick={() => this.handelText()}>Book hotel
                    </button>
                </div>

                <h1 >  i am header</h1>

            </>
        )

    }
}
