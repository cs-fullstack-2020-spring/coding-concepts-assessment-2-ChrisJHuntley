import React, { Component } from 'react';
// import GuestBookList from './GuestBookList';

class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            guestNumber: '',
            Rsvped: false,

        }
    }

// prepare your states to accept changes
    change = (event) => {
        if (event.target.name === "guestName") {
            this.setState({ guestName: event.target.value })
        } else if (event.target.name === "guestNumber") {
            this.setState({ guestNumber: event.target.value })
        } else if (event.target.name === "Rsvped") {
            this.setState({ Rsvped: event.target.value })

        }
    }
    // create event listener so it will know when and what to push
    // ToDo -go back and try to fix 
    addGuest = (event) => {
        event.preventDefault();
        this.props.pushToArray(this.state)
    }
    render() {
        // create form for our guest information
        return (
            <div className='form'>
                <form action="">
                    <fieldset>
                        <legend><h2>Guest Form</h2></legend>

                        <div className="formGroup">
                            <label htmlFor=" guestName">Guest Name: </label>
                            <input type="text" name="guestName" id="guestName"
                                value={this.state.guestName} onChange={this.change} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="guestNumber">guest Number : </label>
                            <input type="text" name="guestNumber" id="guestNumber"
                                value={this.state.guestNumber} onChange={this.change} />
                        </div>

                        <div className="formGroup">
                            <p> Rsvped?:</p>
                            <label htmlFor="Rsvped">Rsvped: </label>
                            <input type="checkbox" id="Rsvped" name="Rsvped"
                                checked={this.state.Rsvped} onChange={this.change} />
                        </div>
                        {/* Make a button and pass in your event  */}
                        <button onClick={this.addGuest}>Enter</button>

                    </fieldset>
                </form>
                {/* sanity display on page */}
                <div>
                    {`guestName: ${this.state.guestName}\n
                 guestNumber: ${this.state.guestNumber}\n
                 Rsvped:${this.state.Rsvped}`}
                </div>
            </div>
        )
    }
}

export default GuestBookForm;