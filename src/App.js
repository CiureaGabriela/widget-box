
import './App.css';
import React from 'react';

import { Switch, Route } from "react-router-dom";


import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


export default function App () {
   

       
       return(
              <div className=' app-div d-flex justify-content-center '>
               

                 <Switch>
                   <Route exact path="/" component={Page1}/>
                   <Route  path="/page2" component={()=><Page2 redirect={false}/>}/>
                   {/* <Route  path="/page3" component={Page3}/> */}
                 </Switch>
                   
                    

                </div>



                );

             }
  
             
     

    
               


 
