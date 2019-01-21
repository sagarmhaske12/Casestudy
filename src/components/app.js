import React, { Component } from 'react';
import Test from '../components/test';
import HeaderTop from '../components/HeaderTop';
import Middle from '../components/Middle';
import TicketList from '../components/TicketList';
import Categories from '../components/Categories';
import BlogVideo from '../components/BlogVideo';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
       <HeaderTop/>
       <Middle/>
       <TicketList/>
       <Categories/>
       <BlogVideo/>
       <Logo/>
       <Footer/>
       </div>
    );
  }
}
