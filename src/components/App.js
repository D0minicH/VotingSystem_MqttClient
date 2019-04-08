import React from 'react';
import Counter from './Counter';
import { Container, Row, Col } from 'reactstrap';


export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Container>
                    <Row>
                        <Col xs="6">
                            <Counter
                                background={'#4BCC4B'}
                                counter={1}
                                header={'Yes'}>
                            </Counter>
                        </Col>
                        <Col xs="6">
                            <Counter
                                background={'#E55747'}
                                counter={1}
                                header={'No'}>
                            </Counter>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}