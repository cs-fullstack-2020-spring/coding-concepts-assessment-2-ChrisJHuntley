import React, { Component } from "react";
import GuestBookList from './GuestBookList'
import GuestBookListRsvp from './GuestBookListRsvp'
import GuestBookForm from "./GuestBookForm";
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {



        }
        // create function for each array to be pushed to
    }
    pushToArray=(newGuest)=>{
        this.props.HasRsvp.push(newGuest);
        this.setState({HasRsvp:this.props.HasRsvp})
    }
    pushToArray=(newGuest)=>{
        this.props.NoRsvp.push(newGuest);
        this.setState({NoRsvp:this.props.NoRsvp})
    }
    
    render() {
        // List and define arrays and its properties
        const HasRsvp = [{
            'guestName': 'Brandon',
            'guestNumber': '615-488-2146',
            'RSVPed': true
        },
        {
            'guestName': 'leon',
            'guestNumber': '988-216-1872',
            'RSVPed': true
        }]
        const NoRsvp = [
            {
                'guestName': 'John',
                'guestNumber': '901-225-3879',
                'RSVPed': false
            },
            {
                'guestName': 'Dave',
                'guestNumber': '841-346-9928',
                'RSVPed': false
            }
        ]
       
        return (
            <div className='container'>
                <h1>Guest List Manager</h1>
                {/* Call our components and pass them the arrays */}
                <GuestBookList NoRsvp={NoRsvp} />
                <GuestBookListRsvp  HasRsvp={HasRsvp}/>
                <GuestBookForm/>
            </div>
        )
    }
}
export default AppContainer