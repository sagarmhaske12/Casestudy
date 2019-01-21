import React, { Component } from 'react';
import Ticket from '../components/Ticket';
export default class TicketList extends Component {
  render() {
    const ticket=[1,2,3,4,5,6]
    return (
      <div>
           <section className="hot-ticket-sec ticket-boxes">
        <div className="container">
          <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
          {ticket.map((i,index) => {
        return <div className="column">
        <div className="col-xs-12 col-sm-6 col-lg-4">
        <Ticket key={i}></Ticket>
        </div>
         </div>
      })}
      
</div>
      <div className="btn-sec text-center p-20 pt-0">
        <a href="#" className="btn btncolor btn-custome-lg ">Discover More</a>
      </div>
      </section>
       </div>
    );
  }
}
