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
        email: '',
        message: '',
        subject: '',
        status: '',
        disabled: false,
        emailSent: null
      }
      this.submitForm = this.submitForm.bind(this);
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      })
    }


    // handleSubmit = (event) => {
    //   event.preventDefault();

    //   this.setState({
    //     disabled: true
    //   });
      // axios.post('http://localhost:5000/api/email', this.state)
      //     .then(res => {
      //       if(res.data.success) {
      //         this.setState({
      //           disabled: false,
      //           emailSent: true
      //         });
      //       } else {
      //           this.setState({
      //             disabled: false,
      //             emailSent: false
      //           });
      //       }
      //     })
      //     .catch(err => {
      //         this.setState({
      //           disabled: false,
      //           emailSent: false
      //         });
      //     })

    render() {
      const { status } = this.state;
      return (
        <Container>

          <Hero title={this.props.title} />

          <Content>
            <form
                onSubmit={this.submitForm}
                action='https://formspree.io/myynawny'
                method='POST'
                id='contactForm'>
        
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="textFadeIn1">
                  <label htmlFor="full-name">Full Name</label>
                  <input className="contact-form-text" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="textFadeIn2">
                  <label htmlFor="email">Your Email</label>
                  <input className="contact-form-text" id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                </div>
              </div>
            </div>

              <div className="textFadeIn3">
                <label htmlFor="subject">Subject</label>
                <input className="contact-form-text" id="subject" name="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
              </div>

              <div className="textFadeIn2">
                <label htmlFor="message">Message</label>
                <textarea rows="4" cols="70" id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />
              </div>
            


              {status === 'SUCCESS' ? <p className="d-inline success-msg">Email Sent!</p> : <Button onClick={this.submitForm} className="d-inline-block textFadeIn4" variant="primary" type="submit" disabled={this.state.disabled}>Send</Button>}
              {status === 'ERROR' && <p className="d-inline error-msg">Error - Email Not Sent</p>}

            </form>
          </Content>
          
        </Container>
      )
    };
    
  submitForm(ev) {
    const formData = new FormData(myForm);
    const myForm = document.getElementById("contactForm");
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
    }
};


export default Contact;