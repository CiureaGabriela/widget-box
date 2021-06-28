import React from 'react'
import Layout from '../components/Layout'
import List2 from './List2'



 class Page2 extends React.Component {
    constructor(){
        super();
         this.state={
             
             news2: []  
             
   
         };
         
       }
       
      
       
       async componentDidMount() {
        const url2 ="http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
        const response2 =await fetch(url2);
        const data2 = await response2.json();
        this.setState({news2:data2.news.slice(5,10)});
      
        
   
       }
      

       render(){
           

        return(

            <div>
                <Layout>

                <List2 news2={this.state.news2}/>

                </Layout>
                
                


            </div>



        )
    }
}


export default Page2