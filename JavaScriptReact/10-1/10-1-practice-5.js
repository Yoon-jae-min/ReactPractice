class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            unit: 0,
            transUnit: 10
        }
    }

    render(){
        return <div>
            <input value={this.state.unit} type="text" onChange={this.value}/>
            <span> cm = {this.state.unit * this.state.transUnit} </span>
            <select onChange={this.trans}>
                <option value={10}>mm</option>
                <option value={0.01}>m</option>
                <option value={0.3937}>inch</option>
            </select>
        </div>
    }

    trans = (event) => {
        if(event.target.options[event.target.selectedIndex].text == 'mm'){
            this.setState({
                transUnit: event.target.value
            })
        }
        else if(event.target.options[event.target.selectedIndex].text == 'm'){
            this.setState({
                transUnit: event.target.value
            })
        }
        else if(event.target.options[event.target.selectedIndex].text == 'inch'){
            this.setState({
                transUnit: event.target.value
            })
        }
    }

    value = (event) => {
        this.setState({
            unit: event.target.value
        })
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);