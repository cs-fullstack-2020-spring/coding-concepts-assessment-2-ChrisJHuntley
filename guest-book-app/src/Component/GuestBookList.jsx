import React,{ Component } from "react";
import GuestBookForm from './GuestBookForm'

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={
             


        }
    }
     
    
    render(){
        const GuestList=this.props.listOfGuests


        return(
            <div>
                <h1>guestbooklist</h1>
                {
                    GuestList.map((guest)=>{
                        return(
                            <GuestBookForm/>
                        )
                    })
                }
            </div>
        )
    }
}
export default AppContainer