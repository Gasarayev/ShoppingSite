import React from 'react'
import "../NewsLetter/style.css"

function NewsLetter() {
  return (
    <div className='container-fluid bgColor_newsletter'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='news_letter d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center'>
                            <h4>Newsletter</h4>
                            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <form action="post">
                        <div className='newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center'>
                            <input type="email" placeholder='Your email' />
                            <button>subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
