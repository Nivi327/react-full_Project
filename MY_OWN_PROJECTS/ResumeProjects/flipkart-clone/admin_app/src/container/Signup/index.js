import React from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { Layout } from './../../components/Layout'
import { Input } from '../../components/UI/Input'
/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '3rem' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                <Input
                type="text"
                label="First Name"
                placeholder="First Name"
                value=""
                onChange={() => { }}
              />
                </Col>
                <Col md={6}>
                <Input
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value=""
                onChange={() => { }}
              />
                </Col>
              </Row>
              <Input
                type="text"
                label="Email"
                placeholder="Enter email"
                value=""
                onChange={() => { }}
                errorMessage="We don't share your email with anyone"
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter password"
                value=""
                onChange={() => { }}
              />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}