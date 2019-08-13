import React, {Component} from 'react';
import Contact from './Contact.js';

let firstName = ('#firstName').val();
let lastName = ('#lastName').val();
let impression = ('#impression').val();

class Sentence extends Component {
    render () {
        return (
            <p>{firstName} {lastName}'s best impression is {impression}</p>
        )
    }
}


export default Sentence;