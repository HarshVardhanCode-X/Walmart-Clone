import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import Zoom from 'react-medium-image-zoom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './SingleProduct.css'
import Carousel from 'react-multi-carousel';


function SingleProduct() {

  const { state } = useLocation();

  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  const productImg = [
    {
      image: state?.smallimage1,
      isActve: false
    },
    {
      image: state?.smallimage2,
      isActve: false
    },
    {
      image: state?.smallimage3,
      isActve: false
    },
    {
      image: state?.smallimage4,
      isActve: false
    },
    {
      image: state?.smallimage5,
      isActve: false
    }
  ]


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
      <main className='product-container'>

        <section className='product-wrapper'>

          <div className='product-small-image'>
            <div className='product-small-image-div'>
              <img src={state?.smallimage1} />
            </div>

            <div className='product-small-image-div'>
              <img src={state?.smallimage2} />
            </div>

            <div className='product-small-image-div'>
              <img src={state?.smallimage3} />
            </div>

            <div className='product-small-image-div'>
              <img src={state?.smallimage4} />
            </div>

            <div className='product-small-image-div'>
              <img src={state?.smallimage5} />
            </div>
          </div>

          <div className='product-big-image'>
            <div className='product-big-image-div'>
              <div className='electronic-images'>
                <Carousel responsive={responsive} swipeable={true}
                  draggable={true} autoPlay={true} infinite={true}
                  autoPlaySpeed={2000} autoplayHoverPause={true}
                  mouseDrag={true} autoWidth={true}>

                  {productImg.map((ele, i) => {
                    return (
                      <div class='item' key={i}>
                      
                      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img
                              alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                              src={ele?.image}
                              width="500"
                            />
                        </ControlledZoom>

                      </div>
                    )
                  })}


                </Carousel>
              </div>
            </div>
          </div>

          <div className='product-rate'>

            <div>
              <div>
                <div>In 50+ people's carts</div>
              </div>

              <div>
                <span>Popular pick</span>
                <span>for this set</span>
              </div>

              <div>
                <p>{state?.category}</p>
              </div>

              <div>
                <h1>{state?.description1}</h1>
                <h1>{state?.description2}</h1>
              </div>

              <div>
                <MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 />
                <p>{state?.rating}</p>
              </div>

              <div>
                <p><GiReturnArrow /> Free 90-day returns</p>
              </div>

              <div>
                <h1>${state?.price}</h1>
              </div>

              <div>
                <p>Price when purchased online <FaInfoCircle /></p>
              </div>

              <div>
                <h4>Add to cart</h4>
              </div>

            </div>


            <div>
              <div>
                <p>How do you want your item?</p>
              </div>

              <div>
                <input type="checkbox"></input>
                <p> I want shipping & delivery savings with <img src="./images/singleproduct1.svg"></img></p>
                <p>You get 30 days free! Choose a plan at checkout.</p>
              </div>

              <div>
                <div>
                  <img src="./images/singleproduct2.png"></img>
                  <p>shipping</p>
                  <p>Arrives sep 22</p>
                  <p>Order within 9 hr 20 min</p>
                </div>

                <div>
                  <img src="./images/singleproduct3.png"></img>
                  <p>Pickup</p>
                  <p>Check nearby</p>
                </div>

                <div>
                  <img src="./images/singleproduct4.png"></img>
                  <p>Delivery</p>
                  <p>Not available</p>
                </div>
              </div>

              <div>
                <p>Delivert to Sacramento, 95829</p>
              </div>

              <div>
                <p><GiReturnArrow />Free 90-day returns</p>
                <p>Details</p>
                <p>Sold and shipped by Walmart.com</p>
              </div>

            </div>


          </div>

        </section>

      </main>
      <div className='electronic-images'>
        <Carousel responsive={responsive} swipeable={true}
          draggable={true} infinite={true}
      
          mouseDrag={true} autoWidth={true}>

          {productImg.map((ele, i) => {
            return (
              <div className='item'>
              <Zoom>
                  <img src={ele?.image} alt='cash-hand' />
             </Zoom></div>
            )
          })}


        </Carousel>
      </div>
    </>
  )
}

export default SingleProduct
