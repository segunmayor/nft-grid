import React, { Component } from 'react'
import Slider from "react-slick"
// import * as helper from "../util/helper"

// eslint-disable-next-line
class CarouselSlider extends Component<{data: Array<string>}, {alt: string}> {

   state = {
      data: ['https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400',
      'https://media.istockphoto.com/photos/hand-watering-plants-tree-mountain-green-background-female-hand-tree-picture-id1281565947',
      'https://media.istockphoto.com/photos/hand-watering-plants-tree-mountain-green-background-female-hand-tree-picture-id1275296347',
      'https://media.istockphoto.com/photos/children-caring-young-plant-on-soil-in-garden-picture-id1167393866'],
      alt: 'Carousel',
    }

  sly() {
    // helper.Sliderelement(this.state.ele, this.state.data, this.state.childElement)

    console.log('state', this.state)

    // return (

    //   <div>
    //   <img src={this.state.data[0]} />
    //   <img src={this.state.data[1]} />
    //   <img src={this.state.data[2]} />
    //   <img src={this.state.data[3]} />

    //   </div>

    // );

  //     const imageList = ['https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400',
  // 'https://media.istockphoto.com/photos/hand-watering-plants-tree-mountain-green-background-female-hand-tree-picture-id1281565947',
  // 'https://media.istockphoto.com/photos/hand-watering-plants-tree-mountain-green-background-female-hand-tree-picture-id1275296347',
  // 'https://media.istockphoto.com/photos/children-caring-young-plant-on-soil-in-garden-picture-id1167393866']

    // console.log('data: ', this.state.data)

  }

render() {

  this.sly()
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (

    <div className="slider-content">
    <Slider {...settings}>

    {/* <div>
      <h1>1</h1>
    </div>
    <div>
      <h1>2</h1>
    </div>
    <div>
      <h1>3</h1>
    </div>
    <div>
      <h1>4</h1>
    </div>
    <div>
      <h1>5</h1>
    </div>
    <div>
      <h1>6</h1>
    </div>
    <div>
      <h1>7</h1>
    </div>
    <div>
      <h1>8</h1>
    </div>
    <div>
      <h1>9</h1>
    </div>
    <div>
      <h1>10</h1>
    </div> */}
     
    {/* { this.sly() } */}

<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[0]} />
</div>
   3260
<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[1]} />
      
</div>

<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[2]} />
    
</div>

<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[3]} />
</div>

<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[3]} />
</div>

<div className="sliderCarouselList1">
<img alt={this.state.alt} width="300" src={this.state.data[3]} />
</div>

    </Slider>
    </div>
    
      );

}

    
}

export default CarouselSlider
