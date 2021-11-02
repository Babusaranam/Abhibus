import axios from 'axios'
import React, { Component } from 'react'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'

export default class Buslist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buslist: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/list/:source/:destination')
            .then((response) => {
                console.log({ response })
                this.setState({
                    buslist: response.data
                })
            })
    }



    render() {
        const { buslist } = this.state
        return (
            <>
                <div className="m-5 text-center">
                    <div>
                        <Card>
                            {buslist.map((item, index) => {
                                return (
                                    <div>
                                        <Card className="bok">
                                            <Card.Header className="bg-danger text-white" as="h5">Travels:{item.type}</Card.Header>
                                            <Card.Body>
                                                <p className="text-success font-weight-bold">  BusPrice: {item.price}</p>
                                                <p className="text-danger  font-weight-bold"> BusTime:{item.time}</p>
                                                <Button className="bom" variant="warning" onClick={() => this.handelBook()}>Book Ticket</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>


                                )

                            }
                            )}




                        </Card>
                    </div>
                </div>
            </>
        )
    }
}
