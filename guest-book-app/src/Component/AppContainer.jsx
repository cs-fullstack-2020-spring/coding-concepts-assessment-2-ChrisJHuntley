import React,{ Component } from "react";
import GuestBookList from './GuestBookList'
class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={

 

        }
    }
    render(){
        const listOfGuests=[{guestName:'John',
        guestNumber:901-225-3879,
    RSVPed:false}]
     
        return(
            <div>
                <h1>Guest List Manager</h1>
                <GuestBookList listOfGuests={listOfGuests}/>
            </div>
        )
    }
}
export default AppContainer