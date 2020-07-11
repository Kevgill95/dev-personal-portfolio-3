import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import '../css/contact.css';
import '../css/app.css';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        message: '',
        subject: '',
        disabled: false,
        emailSent: null
      }
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        disabled: true
      });
      
      axios.post('http://localhost:3030/api/email', this.state)
          .then(res => {
            if(res.data.success) {
              this.setState({
                disabled: false,
                emailSent: true
              });
            } else {
                this.setState({
                  disabled: false,
                  emailSent: false
                });
            }
          })
          .catch(err => {
              this.setState({
                disabled: false,
                emailSent: false
              });
          })
    }


    render() {
      return (
        <Container>

          <Hero title={this.props.title} />

          <Content>
            <Form>
              <Form.Group className="textFadeIn1">
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control className="contact-form-text" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group className="textFadeIn2">
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control className="contact-form-text" id="email" name="subject" type="subject" value={this.state.subject} onChange={this.handleChange} />
              </Form.Group>


              <Form.Group className="textFadeIn3">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />
              </Form.Group>
            
              <Button onClick={this.handleSubmit} className="d-inline-block textFadeIn4" variant="primary" type="submit" disabled={this.state.disabled}>
                Send
              </Button>

              {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
              {this.state.emailSent === false && <p className="d-inline error-msg">Error - Email Not Sent</p>}
            </Form>
          </Content>
          
        </Container>
      );
    }
}



export default Contact;