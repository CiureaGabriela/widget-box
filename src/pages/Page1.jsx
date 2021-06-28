import React from 'react'
import Layout from '../components/Layout'
import List1 from './List1'

    class Page1 extends React.Component {
    constructor(){
        super();
         this.state={
             
             news1: []  
   
         };
         
       }


       async componentDidMount() {
        const url1 ="http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
        const response1 =await fetch(url1);
        const data1 = await response1.json();
        this.setState({news1:data1.news.slice(0,5)});
      
        
   
       }

       render(){

        return(

            <div className='page1-div'>
                <Layout>

                <List1 news1={this.state.news1}/>

                </Layout>
                


            </div>



        )
           



       }
    
}

export default Page1;
