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
import 'react-multi-carousel/lib/styles.css';


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
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>

      <div className='main-single-product-div'>
        <section className='biggest-single-product-div'>

          <div className='single-product-div1'>
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
          </div>


          <div className='single-product-div2'>
              <Carousel responsive={responsive} swipeable={true}
                draggable={true} infinite={true}
                mouseDrag={true} >

                {productImg.map((ele, i) => {
                  return (
                    <div className='single-item'>
                      
                        <img src={ele?.image} alt='cash-hand' />
                    
                    </div>
                  )
                })}


              </Carousel>
              
          </div>


          <div className='single-product-div3'>

            <div className='product-rate'>

              <div className='product-rate-A'>
                <div className='product-rate1'>
                  <div>In 50+ people's carts</div>
                </div>

                <div className='product-rate2'>
                  <span className='product-rateA12'>Popular pick</span>
                  <span className='product-rateA22'>for this set</span>
                </div>

                <div className='product-rate3'>
                  <p>{state?.category}</p>
                </div>

                <div className='product-rate4'>
                  <h1>{state?.description1}</h1>
                  <h1>{state?.description2}</h1>
                </div>

                <div className='product-rate5'>
                  <MdOutlineStarBorderPurple500 color='yellow'/><MdOutlineStarBorderPurple500 color='yellow'/><MdOutlineStarBorderPurple500 color='yellow'/><MdOutlineStarBorderPurple500 color='yellow'/><MdOutlineStarBorderPurple500 color='yellow'/>
                  <p>( {state?.rating}.0 ) | 24 ratings</p>
                </div>

                <div className='product-rate6'>
                  <p><GiReturnArrow color='blue'/> Free 90-day returns</p>
                </div>

                <div className='product-rate7'>
                  <h1>${state?.price}</h1>
                </div>

                <div className='product-rate8'>
                  <p>Price when purchased online <FaInfoCircle /></p>
                </div>

                <div className='product-rate9'>
                  <h4>Add to cart</h4>
                </div>

              </div>


              <div className='product-rate-B'>
                <div className='product-rate10'>
                  <p>How do you want your item?</p>
                </div>

                <div className='product-rate11'>
                  <input type="checkbox"></input>
                  <div>
                    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"5px"}}>
                    <p> I want shipping & delivery savings with </p>
                    <img src="./images/singleproduct1.svg" style={{width:"68px"}}></img>
                    </div>
                    <p style={{fontSize:"12.5px",color: "#787a7b"}}>You get 30 days free! Choose a plan at checkout.</p>
                  </div>
                </div>

                <div className='product-rate12'>
                  <div>
                    <img src="./images/singleproduct2.png"></img>
                    <p>shipping</p>
                    <p>Arrives sep 22</p>
                    <p>Order within 9 hr 20 min</p>
                  </div>

                  <div className='product-rate13'>
                    <img src="./images/singleproduct3.png"></img>
                    <p>Pickup</p>
                    <p>Check nearby</p>
                  </div>

                  <div className='product-rate14'>
                    <img src="./images/singleproduct4.png"></img>
                    <p>Delivery</p>
                    <p>Not available</p>
                  </div>
                </div>

                <div className='product-rate15'>
                  <p>Delivert to Sacramento, 95829</p>
                </div>

                <div className='product-rate16'>
                  <p><GiReturnArrow />Free 90-day returns</p>
                  <p>Details</p>
                  <p>Sold and shipped by Walmart.com</p>
                </div>

              </div>


            </div>

          </div>

        </section>
      </div>


    </>
  )
}

export default SingleProduct
