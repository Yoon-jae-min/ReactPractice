class Test extends React.Component{
    constructor(){
        super()
        
        this.state = {
            now: new Date()
        }
    }

    render(){
        return <h1>{this.state.now.toLocaleTimeString()}</h1>
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({
                now: new Date()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }
}

let container = document.getElementById('root');
ReactDOM.render(<Test />, container);

