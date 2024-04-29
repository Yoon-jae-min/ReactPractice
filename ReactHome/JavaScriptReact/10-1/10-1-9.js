class Test extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            text: ''
        }
    }

    render(){
        return <div>
            <input value={this.state.text} onChange={this.inputText}></input>
            <h1>{this.state.text}</h1>
        </div>
    }


    inputText = (event) => {
        this.setState({
            text: event.target.value
        })
    }
}

let root = document.getElementById('root');
ReactDOM.render(<Test/>, root);