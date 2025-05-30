import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PricingTab from './PricingTab'
import PricingAccordian from './PricingAccordian'
import { useLocation } from 'react-router-dom'

const Pricing = () => {
    const location = useLocation()
    const data = location?.state?.selectedPlan
  return (
    <div>
        <Header/>
      <section class="product-section">
                <div class="container">
                    <h1>Pricing</h1>
                    <p>Flexible Plans Tailored to Your Business Needs.</p>
                    <button className='common_btn'>Create a free account to get started</button>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>
            <div className='choose-plan-wrap'>
                <div className='plan-content'>
                    <h2>
                    Choose the Right Plan for Your Business
                    </h2>
                    <p>
                    At PathSynch, we understand that every business is unique. That’s why we offer a tiered pricing model designed to meet the needs of your businesses, with optional add-ons to enhance your subscription, putting you on the Path to success. Whether you’re just starting out or scaling your operations, PathSynch has the tools and features to help you grow.
                    </p>
                </div>
                <PricingTab data={data}/>
            </div>

            <div className="pricing-table">
            

            <table>
                <thead>
                    <tr>
                        <th>Compare Plans
                        <p>Discover which plan suits your needs best.</p></th>
                        <th>
                            Free
                            <div><button className="btn">GET STARTED</button></div>
                        </th>
                        <th>
                            Pro
                            <div><button className="btn">GET STARTED</button></div>
                        </th>
                        <th>
                            Enterprise
                            <div><button className="btn">GET STARTED</button></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-left'>Donec aliquam</td>
                        <td>100 p/m</td>
                        <td>Quislibet</td>
                        <td>Caritatis</td>
                    </tr>
                    <tr>
                        <td className='text-left'>Vivamus ligula felis</td>
                        <td>100 p/m</td>
                        <td>$5000 p/m</td>
                        <td>Caritatis</td>
                    </tr>
                    <tr>
                        <td className='text-left'>Etiam et purus</td>
                        <td>500 p/m</td>
                        <td>$5000 p/m<br />Vivamus vitae felis</td>
                        <td>Caritatis</td>
                    </tr>
                    <tr>
                        <td className='text-left'>Sed convallis</td>
                        <td></td>
                        <td>Dubitat</td>
                        <td><img src='bookmark.svg'/></td>
                    </tr>
                    <tr>
                        <td className='text-left'>Nulla nec arcu</td>
                         <td><img src='bookmark.svg'/></td>
                        <td></td>
                         <td><img src='bookmark.svg'/></td>
                    </tr>
                    <tr>
                        <td className='text-left'>Vivamus ligula vel</td>
                        <td></td>
                        <td>Vivamus ligula felis<br />Etiam et purus</td>
                         <td><img src='bookmark.svg'/></td>
                    </tr>
                    <tr>
                        <td className='text-left'>Ut ac dapibus felis</td>
                        <td></td>
                        <td></td>
                         <td><img src='bookmark.svg'/></td>
                    </tr>
                    <tr>
                        <td className='text-left'>Excepteur proident</td>
                         <td><img src='bookmark.svg'/></td>
                        <td></td>
                         <td><img src='bookmark.svg'/></td>
                    </tr>
                </tbody>
            </table>

            <div className='pricing-accordion'>
            <div className='accordian-content'>
                <span>Lorem Ipsum</span>
                <h1>Most Popular Questions</h1>
                <p>Nullam consequat fermentum nisl, cursus ullamcorper elit elit sagittis molestie eget.</p>
                <button className="btn">GET STARTED</button>
            </div>
            <div><PricingAccordian/></div>
        </div>
        </div>
       
            <Footer/>
    </div>
  )
}

export default Pricing
