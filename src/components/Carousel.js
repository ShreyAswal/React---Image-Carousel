import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state = {
            slide : 0
        };


    }

    nextSlide = () => {
        const newSlide =
        this.state.slide === images.length -1 ? 0 : this.state.slide + 1;
        this.setState({ slide : newSlide })
    }

    prevSlide = () => {
        const newSlide = 
        this.state.slide === 0 ? images.length - 1 : this.state.slide - 1;
        this.setState({slide : newSlide})
    }

        render() {
            return(
                <>
                    {/* <h1>Hello</h1> */}
                    {/* <img src={changePics} alt='img'></img> */}
                     
                    <div className="container">
                        <ArrowBackIosIcon alt="back"  className="arrows" onClick={this.prevSlide}></ArrowBackIosIcon>
                        {/* <div>{changePics}</div> */}
                        <img src={images[this.state.slide].img}  alt="pics" className="images">
                            
                        </img>
                        <ArrowForwardIosIcon alt='forward' className="arrows" onClick={this.nextSlide} ></ArrowForwardIosIcon>
                    </div>
                    <h1 className="title">{images[this.state.slide].title}</h1>
                    <h3 className="subTitle">{images[this.state.slide].subtitle}</h3>
                  
                </>
            )
        } 
}

export default Carousel;