import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Evolt has transformed the way I charge my electric vehicle. Their services are top-notch and reliable.",
    image: "https://via.placeholder.com/100", 
  },
  {
    name: "John Smith",
    text: "The installation process was seamless, and the customer support is excellent. Highly recommend Evolt!",
    image: "https://via.placeholder.com/100", 
  },
  {
    name: "Emily Johnson",
    text: "Evolt's cloud services have made managing our EV charging infrastructure incredibly easy.",
    image: "https://via.placeholder.com/100", 
  },
  {
    name: "Michael Brown",
    text: "I appreciate the excellent support and the reliability of Evolt's charging stations.",
    image: "https://via.placeholder.com/100", 
  },
  {
    name: "Sarah Wilson",
    text: "Evolt's cloud services are a game changer for our EV fleet management.",
    image: "https://via.placeholder.com/100", 
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
        <span className="line" />
        <h2>Testimonials</h2>
        <span className="line" />
      </div>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
