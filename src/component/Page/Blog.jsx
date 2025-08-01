import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const blag = () => {
  return (
    <div>
      <Header/>
      <section class="product-section">
        <div class="container">
          <h1>Blog</h1>
          <p>Donec pulvinar ligula sit amet ultricies tincidunt.</p>
          {/* <button className="common_btn">
          Create a free account to get started
          </button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div class="container-blog">
        <h1 class="title">Mauris dapibus euismod</h1>
        <p class="subtitle">Mauris dapibus euismod magna at pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis porttitor, erat in aliquet posuere, ligula velit scelerisque turpis, eu efficitur nulla urna non sem...</p>
        
        <div class="grid">
            <div class="card">
                <img src="bl1.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nulla facilisi. Cras condimentum imperdiet dui ac euismod.</p>
                </div>
            </div>
            
           
            <div class="card">
                <img src="bl2.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl3.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl4.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl5.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl6.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl7.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl8.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
            <div class="card">
                <img src="bl9.png" alt="Blog Image"/>
                <div class="card-content">
                    <p class="date">02 June, 2024</p>
                    <h2 class="card-title">Pellentesque finibus amet scelerisque metus.</h2>
                    <p class="description">Nunc vehicula, felis nec tincidunt vehicula, nisl nisi malesuada ex.</p>
                </div>
            </div>
        </div>
        
        <div class="pagination">
            <button class="page-btn">&laquo;</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <button class="page-btn">&raquo;</button>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default blag
