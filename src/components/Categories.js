import React, { Component } from 'react';

const Categorys=[
{img:1,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg",text:"Concerts"},
{img:2,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg",text:"Cricket"},
{img:3,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg",text:"Theatre & Arts"},
{img:4,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg",text:"Amusement Parks"},
{img:5,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg",text:"Sports"},
{img:6,src:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg",text:"Restaurants"}]
export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: Categorys
        };
      }
  render() {
    const { images } = this.state;
    return (
        <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">
          {images.map((image, index) => (
            <div key={index}>
              <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>{image.text}</h3>
            </div>
            <img src={image.src} alt="" className="img-full-width"/>
          </a>
        </div>
            </div>
            
          ))}
         
          </div>
          </div>
          </section>
    );
  }
}
