import React, { Component } from 'react';
// import Sentence from './Sentence.js';

class Contact extends Component {
    // const 
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <div>
                    <input id="firstName" placeholder="First Name" type="text"></input><input id="lastName" placeholder="Last Name" type="text"></input><input id="impression" placeholder="Best Impression" type="text"></input><button id="button">Join Us!</button>
                    {/* <Sentence /> */}
                </div>
                <p>1-800-WE-REACT</p>
                <p>Email: info@ReactActors.com</p>
            </div>

        )
    }
}


export default Contact;