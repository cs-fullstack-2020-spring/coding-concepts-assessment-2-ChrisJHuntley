import React, { Component } from "react";
 
class GuestBookListRsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const GuestList = this.props.HasRsvp
        // sanity
        // console.log(`${this.props.GuestList}`)


        return (
            <div className='Rsvp'>
                <h2>Guest With Rsvp</h2>
                <h1>Rsvped</h1>
                  {/* begin our map function */}
                {
                    GuestList.map((Rsvp, idx) => {
                        return (
                            <div key={idx}>
                                  {/* Call and list properties from array */}
                                <p>Guest Name:{Rsvp.guestName}</p>
                                <p>Guest Number:{Rsvp.guestNumber}</p>
                                <p>Rsvped:{Rsvp.Rsvped? 'false':'true'}</p>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default GuestBookListRsvp