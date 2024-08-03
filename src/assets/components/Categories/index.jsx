import React from 'react'
import "../Categories/style.css"
function Categories() {
  return (
    <div className='container'>
      <div className='row'>
            <div className='col-md-4'>
                    <div className='category_bgImg category_bgImg_first'>
                        <div className='category_btn'>Women's</div>
                    </div>
            </div>
            <div className='col-md-4'>
                    <div className='category_bgImg_second category_bgImg'>
                        <div className='category_btn'>Accessories's</div>
                    </div>
            </div>
            <div className='col-md-4'>
                    <div className='category_bgImg_third category_bgImg'>
                        <div className='category_btn'>men's</div>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Categories
