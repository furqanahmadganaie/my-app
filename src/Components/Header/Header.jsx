import React from 'react'
import './Header.css'
import img1 from '../../assets/img.jpg'
const Header = () => {
    return (
        <div>
            <header className='header'>
                <nav className='nav'>
                    <ul className='list'>
                        <li className='list-item'>
                                <div className='left'>
                                <label htmlFor=" Search">BrandName</label>
                                    <input type="text" placeholder=' &#128269;' name='name' className='input-search' />
                             </div>
                    
                        </li>
                        <li className='list-item'>
                            <img src={img1} alt=" profile"  className='img1'/>
                            <h3 className='text'>name</h3>

                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
