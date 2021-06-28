import React from 'react'
import Layout from '../components/Layout'
import List3 from './List2'

 class Page3 extends React.Component {
    constructor(){
        super();
         this.state={
             
             news3: []  
   
         };
         
       }


        async componentDidMount() {
        const url3 ="http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
        const response3 =await fetch(url3);
        const data3 = await response3.json();
        this.setState({news3:data3.news.slice(10,14)});
        console.log(this.state.news3);
     
        
   
       }

       render(){

        return(

            <div>
                <Layout>

                <List3 news3={this.state.news3}/>

                </Layout>
                


            </div>



        )
    }
}


export default Page3