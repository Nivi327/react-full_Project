import React from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
import { Layout } from './../../components/Layout'
/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '3rem' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
                SignIn
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}