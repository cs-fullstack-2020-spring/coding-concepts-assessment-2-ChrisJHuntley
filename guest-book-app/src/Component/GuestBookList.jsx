import React,{ Component } from "react";
 

class GuestBookList extends Component{
    constructor(props){
        super(props);
        this.state={
             


        }
    }
     
    
    render(){
        const GuestList=this.props.NoRsvp
        // console.log(`${this.props.GuestList}`)


        return(
            <div className='NoRsvp'>
                <h2>Guest Without Rsvp</h2>
                <h1>waiting for response...</h1>

                {
                    GuestList.map((guest, idx)=>{
                        return(
                            
                            <div key={idx}>
                                 
                                <p>guest Name:{guest.guestName}</p>
                                <p>guest Number:{guest.guestNumber}</p>
                                <p>Rsvped:{guest.Rsvped? 'true': 'false'}</p>

                            </div>

                             
                        )
                    })
                }
            </div>
        )
    }
}
export default GuestBookList