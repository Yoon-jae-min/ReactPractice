class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            checked: false
        }
    }

    render(){
        let color = {
            color: this.state.checked ? 'blue' : 'red'
        }

        return <div>
            <input type="checkbox" onClick={this.boxcheck}></input>
            <h1 style={color}>글자</h1>
        </div>
    }

    boxcheck = (event) => {
        this.setState({
            checked: event.target.checked
        })
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);