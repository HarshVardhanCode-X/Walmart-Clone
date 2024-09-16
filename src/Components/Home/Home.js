import React from 'react'
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import { DiNancy } from 'react-icons/di';

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
            <OwlCarousel className='owl-theme' loop={true} dots={false} nav autoplay={true} autoplayTimeout={2000}>
              <div class='item'>
                <div>
                <img src='./images/boot1.webp' alt='cash-hand'></img>
                </div>
                <h5>$27.98</h5>
                <p>No Boundaries Women's Buckle<br/>Moto Boots</p>
                <button>Options</button>
              </div>
              <div class='item'>
                <img src='./images/boot2.webp' alt='cash-hand'></img>
                <h5>$27.98</h5>
                <p>No Boundaries Women's Buckle<br/>Moto Boots</p>
                <button>Options</button>
              </div>
              <div class='item'>
                <img src='./images/boot3.webp' alt='cash-hand'></img>
                <h5>$27.98</h5>
                <p>No Boundaries Women's Buckle<br/>Moto Boots</p>
                <button>Options</button>
              </div>
              <div class='item'>
                <img src='./images/boot4.webp' alt='cash-hand'></img>
                <h5>$27.98</h5>
                <p>No Boundaries Women's Buckle<br/>Moto Boots</p>
                <button>Options</button>
              </div>
              <div class='item'>
                  <h4>5</h4>
              </div>
              <div class='item'>
                  <h4>6</h4>
              </div>
              <div class='item'>
                  <h4>7</h4>
              </div>
              <div class='item'>
                  <h4>8</h4>
              </div>
              <div class='item'>
                  <h4>9</h4>
              </div>
              <div class='item'>
                  <h4>10</h4>
              </div>
              <div class='item'>
                  <h4>11</h4>
              </div>
              <div class='item'>
                  <h4>12</h4>
              </div>
            </OwlCarousel>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
