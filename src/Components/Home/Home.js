import React from 'react'
import './Home.css'


function Home() {
  return (
    <>
      <main>
        <section className='main-body'>
          <div className='first'>
            <div className='goat'>
              <a href='#'>
              <h2>The Top Toy List<br/>is here</h2>
              <p>Shop now</p>
              </a>
            </div>
            <div className='goat1'>
              <img src='./images/goat.jpg' alt='cash-hand'></img>
            </div>

            <div className='chotibacchi'>
              <a href='#'>
              <h2>Only at Walmart-<br/>woohoo!</h2>
              <p>Shop toys</p>
              </a>
              </div>
              <div className='chotibacchi1'>
              <img src='./images/chotibacchi.jpg' alt='cash-hand'></img>
            </div>

            <div className='dino'>
            <a href='#'>
              <h2>Big fun for ages 5-7</h2>
              <p>Shop now</p>
              </a>
              <img src='./images/dino.jpg' alt='cash-hand'></img>
            </div>
          </div>

          <div className='second'>
          <div className='makeup'>
              <a href='#'>
              <p>Just in: premium beauty</p>
              <h2>Pamper yourself</h2>
              <p>Shop now</p>
              </a>
              <img src='./images/makeup.jpg' alt='cash-hand'></img>
            </div>

            <div className='insider-second'>
            <div className='watch'>
              <a href='#'>
              <h2>Thinstant classic</h2>
              <p>Preorder now</p>
              </a>
              <img src='./images/watch.jpg' alt='cash-hand'></img>
            </div>
            <div className='toycar'>
              <a href='#'>
              <h2>Toys & more up<br/>to 40% off</h2>
              <p>shop now</p>
              </a>
              <img src='./images/toycar.jpg' alt='cash-hand'></img>
            </div>
            </div>

            <div className='walmart+'>
              <a href='#'>
              <p>Walmart+ members save big with<br/>free delivery from stores</p>
              <p>Terms apply</p>
              <p>Join walmart+</p>
              </a>
              <img src='./images/walmart.webp' alt='cash-hand'></img>
            </div>
          </div>

          <div className='third'>
            <div className='nigga'>
              <a href='#'>
              <h2>Most-wanted for ages 12+</h2>
              <p>shop now</p>
              </a>
              <img src='./images/nigga.jpg' alt='cash-hand'></img>
            </div>
            <div className='block'>
              <a href='#'>
              <h2>Play & grow for ages 1-2</h2>
              <p>shop now</p>
              </a>
              <img src='./images/block.jpg' alt='cash-hand'></img>
            </div>
            <div className='notnigga'>
              <a href='#'>
              <h2>All smiles for ages<br/>2-4</h2>
              <p>shop now</p>
              </a>
              <img src='./images/notnigga.jpg' alt='cash-hand'></img>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
