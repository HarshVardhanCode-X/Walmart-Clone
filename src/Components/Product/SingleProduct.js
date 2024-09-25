import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import 'react-medium-image-zoom/dist/styles.css'
import './SingleProduct.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TbBrandWalmart } from "react-icons/tb";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { IoIosHeartEmpty } from "react-icons/io";
import { ImGift } from "react-icons/im";
import data from '../Data/data';
import { useNavigate } from 'react-router-dom';
import { CiCircleInfo } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { PiToggleRight } from "react-icons/pi";




function SingleProduct() {

  const { state } = useLocation();

  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  const [productImg, setProductImg] = useState([
    {
      id: 1,
      image: state?.smallimage1,
      isActve: true,
      value: 1
    },
    {
      id: 2,
      image: state?.smallimage2,
      isActve: false,
      value: 0
    },
    {
      id: 3,
      image: state?.smallimage3,
      isActve: false,
      value: 0
    },
    {
      id: 4,
      image: state?.smallimage4,
      isActve: false,
      value: 0
    },
    {
      id: 5,
      image: state?.smallimage5,
      isActve: false,
      value: 0
    }
  ])

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

  const singleResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const lastResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };



  function update(id) {
    const data = productImg.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          isActive: true,
          value: 1
        }
      } else {
        return {
          ...ele,
          isActive: false,
          value: 0
        }
      }
    })
    setProductImg(data)
  }


  const products = data.singleProductslider1;

  const products2 = data.singleProductslider2;

  const about = data.product8;

  const lastProducts = data.product9;

  const navigate = useNavigate();


  return (
    <>

      <div className='main-single-product-div'>
        <section className='biggest-single-product-div'>

          <div className='single-product-div1'>
            <div className='product-small-image'>
              {productImg.map((ele) => {
                return (<div className='product-small-image-div' onClick={() => update(ele.id)}>
                  <img src={ele?.image} style={{ border: ele.isActive && '2px solid blue' }} />
                </div>)
              })}

            </div>
          </div>


          <div className='single-product-div2'>
            <Carousel responsive={responsive} swipeable={true}
              draggable={true} infinite={true}
              mouseDrag={true} >

              {JSON.parse(JSON.stringify(productImg)).sort((a, b) => b.value - a.value).map((ele, i) => {
                return (
                  <div className='single-item' id='${ele.id}'>

                    <InnerImageZoom src={ele?.image} alt='cash-hand' zoomScale="1.4" zoomType='hover' />

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
                  <MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' />
                  <p>( {state?.rating}.0 ) | 24 ratings</p>
                </div>

                <div className='product-rate6'>
                  <p><GiReturnArrow color='blue' /> Free 90-day returns</p>
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
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "5px" }}>
                      <p> I want shipping & delivery savings with </p>
                      <img src="./images/singleproduct1.svg" style={{ width: "68px" }}></img>
                    </div>
                    <p style={{ fontSize: "12.5px", color: "#787a7b" }}>You get 30 days free! Choose a plan at checkout.</p>
                  </div>
                </div>

                <div className='product-rate12'>
                  <div className='shipping-method1'>
                    <img src="./images/singleproduct2.png"></img>
                    <p className='shipping-method1-head'>Shipping</p>
                    <p className='shipping-method1-para1'>Arrives sep 22</p>
                    <p className='shipping-method1-para'>Order within 9 hr 20</p>
                    <p className='shipping-method1-para'>min</p>
                  </div>

                  <div className='shipping-method2'>
                    <img src="./images/singleproduct3.png"></img>
                    <p className='shipping-method2-head'>Pickup</p>
                    <p className='shipping-method2-para'>Check nearby</p>
                  </div>

                  <div className='shipping-method3'>
                    <img src="./images/singleproduct4.png"></img>
                    <p className='shipping-method3-head'>Delivery</p>
                    <p className='shipping-method3-para'>Not available</p>
                  </div>
                </div>

                <div className='product-rate13'>
                  <p>Delivery to</p>
                  <p className='product-rate13a'>Sacramento, 95829</p>
                </div>

                <div className='product-rate14'>
                  <p className='product-rate14a'><GiReturnArrow color='blue' /> Free 90-day returns</p>
                  <p className='product-rate14b'>Details</p>
                  <p><TbBrandWalmart /> Sold and shipped by Walmart.com</p>
                </div>

              </div>

              <div className='product-rate-C'>
                <div className='product-rate-CA'>
                  <div className='product-rate15'>
                    <img src='./images/gifting.svg' />
                  </div>
                  <div className='product-rate16'>
                    <p>This item is gift eligible</p>
                  </div>
                  <div className='product-rate17'>
                    <p>Learn more</p>
                  </div>
                </div>

                <div className='product-rate-CB'>
                  <div className='product-rate18'>
                    <div><IoIosHeartEmpty /></div>
                    <p>Add to list</p>
                  </div>
                  <div className='product-rate19'>
                    <div><ImGift /></div>
                    <p>Add to registry</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className='single-product-slide1'>

            <div class='jigger-heading'>
              <h2>Similar items you might like</h2>
              <p>Based on what customers bought</p>
            </div>

            <Carousel responsive={singleResponsive} swipeable={true}
              draggable={true} autoPlay={true} infinite={true}
              autoPlaySpeed={2000} autoplayHoverPause={true}
              mouseDrag={true}>

              {products.map((ele, i) => {
                return (
                  <div class='jigger-item' key={i}>
                    <div className='jigger-image'>
                      <img src={ele?.image} alt='cash-hand'></img>
                    </div>
                    <div className='jigger-text'>
                      <h5>${ele?.price}</h5>
                      <p>{ele?.description1}<br />{ele?.description2}</p>
                      <button onClick={() => navigate("/product-details", { state: ele })}>Options</button>
                    </div>
                  </div>
                )
              })}


            </Carousel>

          </div>

          <div className='single-product-about'>

            <div className='single-product-about-wrapper'>

              <div className='single-product-about1'>
                <h3>About this item</h3>
              </div>

              <hr />

              <div className='single-product-about2'>

                <div className='single-product-about21'>
                  <p>Product details</p>
                </div>
                <div className='single-product-about22'>
                  <h5>{state?.details}</h5>
                </div>
                <div className='single-product-about23'>
                  <ul>
                    <li>{state?.list1}</li>
                    <li>{state?.list2}</li>
                    <li>{state?.list3}</li>
                    <li>{state?.list4}</li>
                  </ul>
                </div>
                <div className='single-product-about24'>
                  <div><CiCircleInfo /></div>
                  <div className='single-product-about241'><p>We aim to show you accurate product information.</p></div>
                  <div className='single-product-about242'><p>See our disclaimer</p></div>
                </div>

              </div>

              <hr />

              <div className='single-product-about3'>

                <div className='single-product-about31'>
                  <p>Specifications</p>
                </div>

                <div className='single-product-about32'>
                  <h4>Features</h4>
                  <p>Professional</p>
                </div>

                <div className='single-product-about33'>
                  <h4>Brand</h4>
                  <p>{state?.category}</p>
                </div>

                <div className='single-product-about34'>
                  <h4>Manufacturer Part Number</h4>
                  <p>{state?.partNumber}</p>
                </div>

                <div className='single-product-about35'>
                  <h4>Manufacturer</h4>
                  <p>PAN HUB</p>
                </div>

                <div className='single-product-about36'>
                  <p>More details</p>
                </div>

              </div>

              <hr />

              <div className='single-product-about4'>

                <div className='single-product-about41'>
                  <p>Warnings</p>
                </div>

                <div className='single-product-about42'>
                  <h4>State Chemical Disclosure</h4>
                  <p>None</p>
                </div>

              </div>

            </div>

          </div>

          <div className='single-product-slide2'>

            <div class='jigger-heading'>
              <h2>Customers also considered</h2>
            </div>

            <Carousel responsive={singleResponsive} swipeable={true}
              draggable={true} autoPlay={true} infinite={true}
              autoPlaySpeed={2000} autoplayHoverPause={true}
              mouseDrag={true}>

              {products2.map((ele, i) => {
                return (
                  <div class='jigger-item' key={i}>
                    <div className='jigger-image'>
                      <img src={ele?.image} alt='cash-hand'></img>
                    </div>
                    <div className='jigger-text'>
                      <h5>${ele?.price}</h5>
                      <p>{ele?.description1}<br />{ele?.description2}</p>
                      <button onClick={() => navigate("/product-details", { state: ele })}>Options</button>
                    </div>
                  </div>
                )
              })}


            </Carousel>

          </div>

          <div className='single-product-review'>

            <hr />

            <div className='single-product-reviewA'>

              <div className='single-product-reviewA1'>
                <h2>Customer rating & reviews</h2>
              </div>

              <div className='single-product-reviewA2'>

                <div className='single-product-review-wrap1'>
                  <div className='single-product-review-wrap11'>
                    <div><p>{state?.rating} out of 5</p></div>
                  </div>
                  <div className='single-product-review-wrap12'>
                    <div>
                      <MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' /><MdOutlineStarBorderPurple500 color='yellow' />
                    </div>
                    <div>
                      <p>18 ratings | 18 reviews</p>
                    </div>
                  </div>
                  <div className='single-product-review-wrap13'>
                    <div>
                      <p>How item rating is calculated</p>
                    </div>
                    <div>
                      <CiCircleInfo />
                    </div>
                  </div>
                  <div className='single-product-review-wrap14'>
                    <p>View all reviews</p>
                  </div>
                </div>

                <div className='single-product-review-wrap2'>
                  <div className='single-product-review-wrap21'>
                    <div>
                      <p>5 stars</p>
                    </div>
                    <div>
                      <input type='range' value={state?.star5}></input>
                    </div>
                    <div>
                      <p>{state?.star5}%</p>
                    </div>
                  </div>

                  <div className='single-product-review-wrap22'>
                    <div>
                      <p>4 stars</p>
                    </div>
                    <div>
                      <input type='range' value={state?.star4}></input>
                    </div>
                    <div>
                      <p>{state?.star4}%</p>
                    </div>
                  </div>
                  <div className='single-product-review-wrap23'>
                    <div>
                      <p>3 stars</p>
                    </div>
                    <div>
                      <input type='range' value={state?.star3}></input>
                    </div>
                    <div>
                      <p>{state?.star3}%</p>
                    </div>
                  </div>
                  <div className='single-product-review-wrap24'>
                    <div>
                      <p>2 stars</p>
                    </div>
                    <div>
                      <input type='range' value={state?.star2}></input>
                    </div>
                    <div>
                      <p>{state?.star2}%</p>
                    </div>
                  </div>
                  <div className='single-product-review-wrap25'>
                    <div>
                      <p>1 stars</p>
                    </div>
                    <div>
                      <input type='range' value={state?.star1}></input>
                    </div>
                    <div>
                      <p>{state?.star1}%</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <hr />

          </div>

          <div className='single-product-customer'>

            <div className='single-product-customer-wrap'>

              <div className='single-product-customer-head'>
                <h4>Frequent Mentions</h4>
              </div>

              <div className='single-product-customerAB'>
                <div className='single-product-customerA'>
                  <div className='single-product-customerA1'>
                    <div className='single-product-customerA11'>
                      <div><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                      <div><p>Verified Purchase</p></div>
                      <div><CiCircleInfo /></div>
                    </div>
                    <div className='single-product-customerA12'>
                      <p>9/19/2024</p>
                    </div>
                  </div>

                  <div className='single-product-customerA2'>
                    <div className='single-product-customerA21'>
                      <h5>Great Quality</h5>
                    </div>
                    <div className='single-product-customerA22'>
                      <p>
                        My friends would also joke and ask if I was making a "cody" drink or a normal drink! I have a tendency to over pour. Now with my own jigger I don't make drink so strong people can't drink them. Thanks for saving all my friends from by bad drinks
                      </p>
                    </div>
                    <div className='single-product-customerA23'>
                      <p>Alexzandra</p>
                    </div>
                  </div>
                </div>

                <div className='single-product-customerA'>
                  <div className='single-product-customerA1'>
                    <div className='single-product-customerA11'>
                      <div><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                      <div><p>Verified Purchase</p></div>
                      <div><CiCircleInfo /></div>
                    </div>
                    <div className='single-product-customerA12'>
                      <p>6/9/2024</p>
                    </div>
                  </div>

                  <div className='single-product-customerA2'>
                    <div className='single-product-customerA21'>
                      <h5>Measure Cocktails Perfectly!</h5>
                    </div>
                    <div className='single-product-customerA22'>
                      <p>
                        This Jigger is a perfect tool to have to help you measure out the perfect amount of alcohol for cocktails. So you won't get to much or to little. Plus it's a pretty gold color too. It's durable and sturdy as well.
                      </p>
                    </div>
                    <div className='single-product-customerA23'>
                      <p>Chelsea</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

        <main className='slider8'>
          <section>
            <div className='electronic-text1'>
              <h2>Popular items in this category</h2>
              <p><a href='#'>View all</a></p>
            </div>
            <div className='electronic-text2'>
              <p>Best selling items that customers love</p>
            </div>

            <div className='electronic-images-slider3'>

              <Carousel responsive={lastResponsive} swipeable={true}
                draggable={true} autoPlay={true} infinite={true}
                autoPlaySpeed={2000} autoplayHoverPause={true}
                mouseDrag={true} autoWidth={true}>

                {lastProducts.map((ele, i) => {
                  return (
                    <div class='item' key={i}>
                      <div className='owl-image'>
                        <img src={ele?.image} alt='cash-hand'></img>
                      </div>
                      <div className='owl-text'>
                        <h5>${ele?.price}</h5>
                        <p>{ele?.description1}<br />{ele?.description2}</p>
                        <button>Options</button>
                      </div>
                    </div>
                  )
                })}


              </Carousel>

            </div>
          </section>
        </main>

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

      </div>


    </>
  )
}

export default SingleProduct
