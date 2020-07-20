import React, { Component } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";

export default class AddGear extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " ",
            brand: "",
            notes: '',
            gear_type: '',
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
            gear_type: this.state.gear_type,
            url: this.state.url,
            quantity: this.state.quantity,
            user_id: this.state.user_id,
            weight: this.state.weight,
            // retired: this.state.retired,
        };
        console.log(gear)

        this.props.handleAddGear(gear);

        this.setState({
            name: " ",
            brand: "",
            notes: '',
            gear_type: '',
            url: '',
            quantity: '',
            user_id: '',
            weight: '',
            retired: false
        });

    };

    render() {

        return (

            <Form className="add-gear" onSubmit={this.addGear}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Name
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Brand
                          </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="brand"
                            name="brand"
                            value={this.state.brand}
                            onChange={this.handleChange} />
                    </Col>
                </Form.Group>



                <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                            Type
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">Clothing</option>
                            <option value="2">Equipment</option>
                            <option value="3">Shoes</option>
                            <option value="4">Photo</option>
                            <option value="5">Climbing</option>
                            <option value="7">Ropes</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Quantity
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
                        Weight
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
                        Link
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
                        Notes
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
                <Button className='button-primary' onClick={this.addGear}> Save </Button>
            </Form>


        );
    }
}
