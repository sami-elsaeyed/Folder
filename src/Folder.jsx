import {Component} from 'react'
class Folder extends Component{
    constructor(props){
        super(props)
        this.state={show:this.props.show}
    }
    toggle=()=>{
         if(this.state.show)
            this.setState({show:false})
        else
            this.setState({show:true})    
    }
    render(){
        if(this.state.show){
        return <div>
            <h1>Home</h1>
            <ul><li>File1</li>
                <li>File2</li>
                <li>FIle3</li>
            </ul>
            <button onClick={this.toggle}>Show Less</button>
        </div>}
        else{
            return <div>
                <h1>Home</h1>
                <button onClick={this.toggle}>Show More</button>
            </div>
        }
    }

}
export default Folder