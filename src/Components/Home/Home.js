import React from 'react'
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import { DiNancy } from 'react-icons/di';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";





function Home() {


  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }

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
            <h2>Walk this way</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>The Shoe Edit has it all.</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women'<br/>Buckle Moto Boots</p>
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
            <h2>Walk this way</h2>
            <p><a href='#'>View all</a></p>
          </div>
          <div className='electronic-text2'>
            <p>The Shoe Edit has it all.</p>
          </div>

          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={true} infinite={true}
                        autoPlaySpeed={2000} autoplayHoverPause={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot3.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot4.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>Options</button>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot2.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <h5>$27.98</h5>
                <p>No Boundaries Women'<br/>Buckle Moto Boots</p>
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
            <h2>Walk this way</h2>
          </div>
        
          <div className='electronic-images'>

              <Carousel responsive={responsive} swipeable={true}
                        draggable={true} autoPlay={false} infinite={true}
                        mouseDrag={true} autoWidth={true}>
              
              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
                </div>
              </div>

              <div class='item'>
                <div className='owl-image'>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <div className='owl-text'>
                <p>Home</p>
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
                      <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                      <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                      <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
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
                <p>Fall Vibes</p>
                <p className='heading'>Feels like home</p>
                <button>Shop now</button>
              </div>
              <div>
                <img src='./images/pookie.jpg' alt='cash-hand'></img>
              </div>
            </div>

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
                      <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                      <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                      <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
                    </div>
                    <div className='owl-text'>
                    <h5>$27.98</h5>
                    <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    <button>+ Add</button>
                    </div>
                  </div>

                  <div class='item'>
                    <div className='owl-image'>
                    <img src='./images/boot1.webp' alt='cash-hand'></img>
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
                <p>Fall Vibes</p>
                <p className='heading'>Feels like home</p>
                <button>Shop now</button>
              </div>
              <div className='pumpkin-image'>
                <img src='./images/pumpkin.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>

          <div className='collage-part2'>
            <div className='merry'>
              <div className='merry-text'>
                <p>Fall Vibes</p>
                <p className='heading'>Feels like home</p>
                <button>Shop now</button>
              </div>
              <div className='merry-image'>
                <img src='./images/merry.jpg' alt='cash-hand'></img>
              </div>
            </div>

            <div className='below-merry'>
              <div className='candy'>
                <div className='candy-text'>
                  <p>Fall Vibes</p>
                  <p className='heading'>Feels like home</p>
                  <button>Shop now</button>
                </div>
                <div className='candy-image'>
                  <img src='./images/candy.jpg' alt='cash-hand'></img>
                </div>
              </div>

              <div className='skull'>
                <div className='skull-text'>
                  <p>Fall Vibes</p>
                  <p className='heading'>Feels like home</p>
                  <button>Shop now</button>
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
                <p>Fall Vibes</p>
                <p className='heading'>Feels like home</p>
                <button>Shop now</button>
              </div>
              <div className='fairy-image'>
                <img src='./images/fairy.jpg' alt='cash-hand'></img>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default Home
