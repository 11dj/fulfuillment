import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarouselStyle.css"
class ImageCarousal extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateScreen);
  }

  updateScreen = () => {
    this.setState({width: window.innerWidth});
    console.log(this.state.width);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    if (this.state.width <= 992) {
      settings.slidesToShow = 2;
    } 
    if (this.state.width <= 768) {
      settings.slidesToShow = 1;
    } 

    return (
      <div className="imageCarousel">
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
            <div className="image">
              <img src="https://www.theenerjuicer.com/wp-content/uploads/2018/03/14.jpg"></img>
            </div>
          </Slider>
        </div>
      </div>
    );
        }
}
export default ImageCarousal;


/*
import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class ImageCarousal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default ImageCarousal;
*/