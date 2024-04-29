class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        return <div>
            <h1>글자수: {this.state.count}</h1>
            <textarea row='3' onChange={this.inputText}/>
        </div>
    }

    inputText = (event) => {
        this.setState({
            count: event.target.value.length
        })
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);