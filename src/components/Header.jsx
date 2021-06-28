import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

class Header extends React.Component {
    constructor(){
         super();
          this.state={
             color1:"black",
             color2:"black",
             color3:"black"

          }
    }

       changeTextColor1(){
        this.setState({color1:"grey" });
        
      }
      changeTextColor2(){
        this.setState({color2:"grey" });
        
      }
      changeTextColor3(){
        this.setState({color3:"grey" });
        
      }

      
     
    render(){
        return (
        
            <div className='header-div d-flex justify-content-around'>
                <h2>Latest News</h2>
                <div className=' d-flex justify-content-end'>
                    <Link to='/'>
                     <div  class='dot' style={{background: this.state.color1}}onClick={() => this.changeTextColor1() }></div>
               
                     </Link>
    
                     <Link to='/page2'>
                        <div class='dot' style={{background: this.state.color2 }}onClick={() => this.changeTextColor2() } ></div>
                     </Link>
                     <Link to ='/page3'>
                       <div class='dot' style={{background: this.state.color3 }}onClick={() => this.changeTextColor3() }></div>
                     </Link>
                
                </div>
            </div>
        )



    }
   
}

export default Header

