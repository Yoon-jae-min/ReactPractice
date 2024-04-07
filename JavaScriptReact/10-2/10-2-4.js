class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            text: ''
        }
    }

    render(){
        return <div>
            <CustomInput onChange={this.changeParent}/>
            <h1>{this.state.text}</h1>
        </div>
    }

    changeParent = (event) => {
        this.setState({
            text: event.target.value
        })
    }
}

class CustomInput extends React.Component{

    render(){
        return <input onChange={this.props.onChange}/>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);