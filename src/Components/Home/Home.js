import React from 'react'
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import { DiNancy } from 'react-icons/di';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { MdPadding } from 'react-icons/md';
import { PiToggleRight } from "react-icons/pi";




function Home() {


  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:6,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const half= {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const slider3= {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1
  }
};

const video_slider = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:4,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const socialMedia= {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};



  return (
    <>
      <main className='main-images'>
        <section className='main-body'>
          <div className='first'>
            <div className='goat'>
              <div className='goat-position'>
                <a href='#'>
                  <div className='goat-text'>
                    <h2>The Top Toy List<br />is here</h2>
                    <p>Shop now</p>
                  </div>
                  <img src='./images/goat.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>

            <div className='baby-girl'>
              <div className='baby-girl-position'>
                <a href='#'>
                  <div className='baby-girl-text'>
                    <h2>Only at Walmart-<br />woohoo!</h2>
                    <p>Shop toys</p>
                  </div>
                  <img src='./images/chotibacchi.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>

            <div className='dino'>
              <div className='dino-position'>
                <a href='#'>
                  <div className='dino-text'>
                    <h2>Big fun for ages 5-7</h2>
                    <p>Shop now</p>
                  </div>
                  <img src='./images/dino.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>
          </div>

          <div className='second'>

            <div className='iphone'>
              <div className='iphone-position'>
                <a href='#'>
                  <div className='iphone-text'>
                    <p className='iphone-text1'>Save upto $1,100</p>
                    <h2>Profoundly<br />powerful.</h2>
                    <p className='iphone-text2'>Preorder now</p>
                  </div>
                  <img src='./images/iphone.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>


            <div className='insider-second'>
              <div className='watch'>
                <div className='watch-position'>
                  <a href='#'>
                    <div className='watch-text'>
                      <h2>Thinstant classic</h2>
                      <p>Preorder now</p>
                    </div>
                    <img src='./images/watch.jpg' alt='cash-hand'></img>
                  </a>
                </div>
              </div>
              <div className='toycar'>
                <div className='toycar-position'>
                  <a href='#'>
                    <div className='toycar-text'>
                      <h2>Upto 40% off</h2>
                      <p>shop now</p>
                    </div>
                    <img src='./images/bag.jpg' alt='cash-hand'></img>
                  </a>
                </div>
              </div>
            </div>

            <div className='walmart-banner'>
              <div className='walmart-banner-position'>
                <a href='#'>
                  <div className='walmart-banner-text'>
                    <p className='walmart-text1'>Walmart+ members save big with<br />free delivery from stores</p>
                    <p className='walmart-text2'>Terms apply.</p>
                    <p className='walmart-text3'>Join Walmart+</p>
                  </div>
                  <img src='./images/walmart.webp' alt='cash-hand'></img>
                </a>
              </div>
            </div>

          </div>


          <div className='third'>

            <div className='lady'>
              <div className='lady-position'>
                <a href='#'>
                  <div className='lady-text'>
                    <h2>Ree's fashion<br />refresh</h2>
                    <p>shop now</p>
                  </div>
                  <img src='./images/lady.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>

            <div className='luxe'>
              <div className='luxe-position'>
                <a href='#'>
                  <div className='luxe-text'>
                    <h2>Latest luxe<br />beauty lineup</h2>
                    <p>shop now</p>
                  </div>
                  <img src='./images/luxe.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>

            <div className='jordan'>
              <div className='jordan-position'>
                <a href='#'>
                  <div className='jordan-text'>
                    <h2>Just-dropped Beats</h2>
                    <p>shop now</p>
                  </div>
                  <img src='./images/jordan.jpg' alt='cash-hand'></img>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>


      <main className='slider1'>
        <section>
          <div className='electronic-text1'>
            <h2>Flash Deals</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>Up to 65% off</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/sdeal1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal5.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal6.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal7.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal8.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal9.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/deal10.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              </Carousel>

          </div>
        </section>
      </main>
      
      <div className='hori-line1'>
        <hr/>
      </div>

      <main className='slider2'>
        <section>
          <div className='electronic-text1'>
            <h2>Save on patio & garden</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>Up to 30% off</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden3.jpeg' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden5.jpeg' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden6.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden7.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden8.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden9.jpeg' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden10.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              </Carousel>
            </div>
          </section>
        </main>
        
        <div className='hori-line1'>
          <hr/>
        </div>

        <main className='slider3'>
        <section>
          
          <div className='electronic-text-small'>
            <h3>Get it all right here</h3>
          </div>
        
          <div className='electronic-images'>

              <Carousel responsive={slider3} swipeable={true}
                        draggable={true} autoPlay={false} infinite={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/grocery.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Grocery</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/sofa.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/garden.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Patio & Garden</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/fashion.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Fashion</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/laptop.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Electronics</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/baby.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Baby</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/manytoys.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Toys</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/medicine.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Health & Wellness</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/soap.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Personal Care</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/beauty.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Beauty</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/wheel.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Auto & tires</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/drill.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home Improvement</p>
                </div>
              </div>

              </Carousel>
          </div>
        </section>
      </main>
      
      <main className='slider4'>
        <section>

          <div className='flex-it'>

            <div className='flexbox-1'>
              <div className='electronic-text1'>
                <h2>Buttery velvets & beyound</h2>
                <p><a href='#'>View all</a></p>
              </div>
              <div className='electronic-text2'>
                <p>Surround yourself in warmth.</p>
              </div>

              <div className='electronic-images'>

                <Carousel responsive={half} swipeable={true}
                          draggable={true} infinite={true}
                          mouseDrag={true} autoWidth={true}>
              
                  <div class='item'>
                    <div className='owl-image'>
                      <img src='./images/dog1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                      <h5>$247.98</h5>
                      <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                      <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog2.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog3.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog4.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog5.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog6.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog7.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/dog8.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>Options</button>
                    </div>
                  </div>

                </Carousel>
              </div>
            </div>

            <div className='flexbox-2'>
              <div className='dog-text'>
                <p>Fall Vibes</p>
                <p className='heading'>Feels like home</p>
                <button>Shop now</button>
              </div>
              <div>
                <img src='./images/dog.jpg' alt='cash-hand'></img>
              </div>
            </div>

          </div>
        </section>
      </main>

      <main className='slider5'>
        <section>

          <div className='flex-it2'>

            <div className='flexbox-2'>
              <div className='dog-text'>
                <p>Live, love, pink</p>
                <p className='heading'>Be An Icon</p>
                <button>Shop now</button>
              </div>
              <div>
                <img src='./images/pookie.jpg' alt='cash-hand'></img>
              </div>
            </div>

            <div className='flexbox-1'>
              <div className='electronic-text1'>
                <h2>Sliving your best life</h2>
                <p><a href='#'>View all</a></p>
              </div>
              <div className='electronic-text2'>
                <p>Cookware, mini fridges & more.</p>
              </div>

              <div className='electronic-images'>

                <Carousel responsive={half} swipeable={true}
                          draggable={true} infinite={true}
                          mouseDrag={true} autoWidth={true}>
              
                  <div class='item'>
                    <div className='owl-image'>
                      <img src='./images/pink1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                      <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                      <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink2.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink3.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink4.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink5.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink6.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink7.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/pink8.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>


                </Carousel>
              </div>
            </div>

          </div>
        </section>
      </main>
      

      <main className='collage1'>
        <section>

          <div className='collage-part1'>
            <div className='pumpkin'>
              <div className='pumpkin-text'>
                <p>Pumpkins to parties</p>
                <p className='heading'>Your Halloween HQ</p>
                <button>Shop all</button>
              </div>
              <div className='pumpkin-image'>
                <img src='./images/pumpkin.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>

          <div className='collage-part2'>
            <div className='merry'>
              <div className='merry-text'>
                <p className='text'>To-die-for decor</p>
                <p className='heading'>Home is where<br/>the haunt is</p>
                <p className='text1'>Shop now</p>
              </div>
              <div className='merry-image'>
                <img src='./images/merry.jpg' alt='cash-hand'></img>
              </div>
            </div>

            <div className='below-merry'>
              <div className='candy'>
                <div className='candy-text'>
                  <p className='heading'>Be the good<br/>candy house</p>
                  <p className='text1'>Shop now</p>
                </div>
                <div className='candy-image'>
                  <img src='./images/candy.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div className='skull'>
                <div className='skull-text'>
                  <p className='heading'>Throw a monster<br/>mash</p>
                  <p className='text1'>Shop now</p>
                </div>
                <div className='skull-image'>
                  <img src='./images/skull.jpg' alt='cash-hand'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='collage-part3'>
            <div className='fairy'>
              <div className='fairy-text'>
                <p className='heading'>Cutest costumes on<br/>the block</p>
                <p className='text1'>Shop now</p>
              </div>
              <div className='fairy-image'>
                <img src='./images/fairy.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main className='slider6'>
        <section>
          <div className='electronic-text1'>
            <h2>Fear not - there's more</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>Something wicked this way comes.</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/halo2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo5.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo6.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo7.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo8.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo9.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/hallo10.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              </Carousel>

          </div>
        </section>
      </main>
      
      <div className='hori-line1'>
        <hr/>
      </div>

      
      <main className='video-slider1'>
        <section>
          <div className='electronic-text1'>
            <h2>Featured in videos</h2>
          </div>
          <div className='electronic-text2'>
            <p>See what creators are sharing</p>
          </div>

          <div className='electronic-videos'>

              <Carousel className='video1-class' responsive={video_slider} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video1.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video2.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video3.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video4.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video5.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video6.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video7.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <video src='./videos/video8.mp4' alt='cash-hand' controls autoPlay={true} muted loop></video>
                </div>
                <div className='video-text'>
                  <h4>$191.51</h4>
                  <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
                </div>
              </div>

              </Carousel>

          </div>
        </section>
      </main>

      <div className='hori-line2'>
        <hr/>
      </div>


      <main className='collage2'>
        <section>

          <div className='collage2-part1'>
            <div className='barbie'>
              <div className='barbie-text'>
              </div>
              <div className='barbie-image'>
                <img src='./images/barbie.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>

          <div className='collage2-part2'>
            <div className='gun'>
              <div className='gun-text'>
                <p className='heading'>Big fun from<br/>Little Tikes</p>
                <p className='text1'>Shop now</p>
              </div>
              <div className='gun-image'>
                <img src='./images/gun.jpg' alt='cash-hand'></img>
              </div>
            </div>

            <div className='below-gun'>
              <div className='starwars'>
                <div className='starwars-text'>
                  <p className='heading'>Playdate faves -<br/>only here</p>
                  <p className='text1'>Shop now</p>
                </div>
                <div className='starwars-image'>
                  <img src='./images/starwars.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div className='prime'>
                <div className='prime-text'>
                  <p className='heading'>Transformers,<br/>roll out</p>
                  <p className='text1'>Shop now</p>
                </div>
                <div className='prime-image'>
                  <img src='./images/prime.jpg' alt='cash-hand'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='collage2-part3'>
            <div className='blackmagic'>
              <div className='blackmagic-text'>
                <p className='text'>Halloween toys</p>
                <p className='heading'>Fright night for<br/>everyone</p>
                <p className='text1'>Shop now</p>
              </div>
              <div className='blackmagic-image'>
                <img src='./images/blackmagic.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>
        </section>
      </main>


      <main className='slider7'>
        <section>
          <div className='electronic-text1'>
            <h2>Hours of entertainment</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>For every age & stage.</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy5.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy6.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy7.png' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy8.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy9.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/toy10.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              </Carousel>

          </div>
        </section>
      </main>


      <div className='hori-line1'>
        <hr/>
      </div>
      
      <main className='video-slider2'>
        <section>
          <div className='electronic-text1'>
            <h2>Trending on social media</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>Shop creator faves</p>
          </div>

          <div className='electronic-videos2'>

              <Carousel responsive={socialMedia} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media8.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media1.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media2.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media3.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media4.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media5.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media6.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                  <img src='./images/media7.jpg' alt='cash-hand'></img>
                </div>
              </div>


              </Carousel>

          </div>
        </section>
      </main>

      <div className='hori-line1' style={{padding:'40px 20px'}}>
        <hr/>
      </div>


      <main className='collage3'>
        <section>

          <div className='collage3-part1'>
            <div className='candel'>
              <div className='candel-text'>
                <p>Feast your eyes</p>
                <p className='heading'>Master the art of<br/>the tablescape</p>
                <button>Shop now</button>
              </div>
              <div className='candel-image'>
                <img src='./images/candel.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>

          <div className='collage3-part2'>
            <div className='desk'>
              <div className='desk-text'>
                <p className='text'>TV stands</p>
                <p className='heading'>Anchor your<br/>space</p>
                <p className='text1'>Shop now</p>
              </div>
              <div className='desk-image'>
                <img src='./images/desk.jpg' alt='cash-hand'></img>
              </div>
            </div>

            <div className='below-desk'>
              <div className='tv'>
                <div className='tv-text'>
                  <p className='heading'>Opt for the big<br/>screen</p>
                  <p className='text1'>Shop TVs</p>
                </div>
                <div className='tv-image'>
                  <img src='./images/tv.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div className='airfry'>
                <div className='airfry-text'>
                  <p className='heading'>Crunch-time<br/>applications</p>
                  <p className='text1'>Shop now</p>
                </div>
                <div className='airfry-image'>
                  <img src='./images/airfry.jpg' alt='cash-hand'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='collage3-part3'>
            <div className='liquor'>
              <div className='liquor-text'>
                <p className='text'>Host happy hour</p>
                <p className='heading'>Mix, mingle & pour</p>
                <p className='text1'>Shop barware</p>
              </div>
              <div className='liquor-image'>
                <img src='./images/liquor.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className='hori-line1'>
        <hr/>
      </div>

      <main className='slider8'>
        <section>
          <div className='electronic-text1'>
            <h2>Let's raise the bar</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>Top-shelf shakers & more.</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar5.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar6.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar7.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar8.png' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar9.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/bar10.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              </Carousel>

          </div>
        </section>
      </main>

      <div className='hori-line1'>
        <hr/>
      </div>


        <footer className='login-footer-home'>
            <div className='login-footer1-home'>
                <ul>
                    <li><a href='#'>Give feedback</a></li>
                    <li><a href='#'>CA Privacy Rights</a></li>
                    <li><a href='#'><PiToggleRight color='blue'/> Your Privacy Choices</a></li>
                    <li><a href='#'>Notice at Collection</a></li>
                    <li><a href='#'>Request My Personal Information</a></li>
                    <li><a href='#'>Delete Account</a></li>
                    <li><a href='#'>California Supply Chains Act</a></li>
                </ul>
            </div>

            <div className='login-footer2-home'>
                <p>© 2024 Walmart. All Rights Reserved.</p>
            </div>
        </footer>

    </>
  )
}

export default Home
