import React, { Component } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";

export default class AddGear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: " ",
            brand: "",
            notes: '',
            geartype: '',
            url: '',
            quantity: '',
            user_id: '',
            weight: '',
            retired: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addGear = (event) => {
        event.preventDefault();
        const gear = {
            name: this.state.name,
            brand: this.state.brand,
            notes: this.state.notes,
            geartype: this.state.geartype,
            url: this.state.url,
            quantity: this.state.quantity,
            user_id: this.props.currentUser.id,
            weight: this.state.weight
            // retired: this.state.retired,
            
        }
        fetch(`http://localhost:3000/api/v1/gears`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(gear),
        }).then((response) => response.json())
            .then((gear) => { console.log(gear) })
            
        this.setState({
            name: " ",
            brand: "",
            notes: '',
            geartype: '',
            url: '',
            quantity: '',
            user_id: '',
            weight: '',
            // retired: false
            
        },() => this.props.history.push("/trip"));

    };
    render() {

        return (
            <div className="add-gear-page">
            <div className="add-gear">
            <h4>Add new piece of gear or clothing item:</h4>
            <Form className="add-gear" onSubmit={this.addGear}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="gear"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                       
                          </Form.Label >
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="brand"
                            name="brand"
                            value={this.state.brand}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="weight"
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="link"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                       
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="notes"
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>
                <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                          
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            name="geartype"
                            value={this.state.geartype}
                            onChange={this.handleChange}
                        >
                            <option value="0">Type...</option>
                            <option value="1">Clothing</option>
                            <option value="2">Equipment</option>
                            <option value="3">Shoes</option>
                            <option value="4">Photo</option>
                            <option value="5">Climbing</option>

                        </Form.Control>
                    </Col>
                </Form.Row>
                <div>
                <Button className='button-primary' onClick={this.addGear}> Save </Button>
                </div>
            </Form>
            </div>
            </div>
            );
    }
}
