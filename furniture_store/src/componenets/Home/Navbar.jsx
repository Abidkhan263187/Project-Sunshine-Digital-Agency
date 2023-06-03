

import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export const Navbar = () => {

   let id=2;
    return (
        <>
            <div className='abid-nav-container'>

                <div className='abid-nav1'>
                    <Link to={"/"} ><h2 style={{border:"1px solid",width:"50px",background:"black",color:"white"}}><i class="fa-solid fa-m"></i></h2></Link> 
                    <Link className='abid-a'><h4 id="h4">Chairs</h4> </Link>

                    <Link className='abid-a'><h4>Tables</h4></Link>
                    <Link className='abid-a'><h4>Lamps</h4></Link>
                    <Link to={`/sofas/${id}`} className='abid-a'><h4>Sofas</h4></Link>
                    <Link className='abid-a'><h4>Cases</h4></Link>
                    <Link className='abid-a'><h4>Others</h4></Link>

                </div>
                <div className='abid-nav2'>
                    <div  className="abid-search-div" >
                        <button style={{background:"white",border:"none"}}> <i class="fa-solid fa-magnifying-glass"></i></button>
                   
                    <input type="search " placeholder='search' className='abid-serach-nav'  />
                    </div>
              
                   <Link to={'/fav'}><p><i class="fa-solid fa-heart"></i></p></Link> 
                   <Link className='shuffle'> <p><i class="fa-solid fa-shuffle"></i></p></Link> 
                   <Link to={'/cart'}> <p><i class="fa-sharp fa-solid fa-cart-shopping"></i></p></Link> 
                   <Link to={'/signup'}><p><i class="fa-solid fa-user"></i></p></Link>
                </div>
                <div className='abid-nav3'>
                <Link>  <p><i class="fa-solid fa-bars"></i></p></Link> 
                </div>
            </div>
           

        </>

    )
}