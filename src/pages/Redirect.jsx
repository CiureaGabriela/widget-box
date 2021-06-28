
import React, {Component} from 'react'

class Redirect extends Component() {
state= {
    redirect:null
}

componenrDidMount(){
    this.id= setTimeout(()=>this.setState({redirect:true}),1000)
}
componentwillUnmount(){
    clearTimeout(this.id)

}

render(){

    return this.state.redirect
    ?<Redirect to ="/"/>
    :<div></div>
}



}

export default Redirect
