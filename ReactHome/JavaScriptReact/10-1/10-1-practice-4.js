class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            time: 0
        }
    }

    render(){
        return <div>
            <input type="checkbox" onClick={this.timeStartButton}/>
            <span>타이머 활성화</span>
            <h1>{this.state.time}초</h1>
        </div>
    }

    timeStartButton = (event) => {
        if(event.target.checked){
            this.timeInterval = setInterval(() => {
                this.setState({
                    time: this.state.time + 1
                })
            }, 1000)
        }
        else{
            clearInterval(this.timeInterval)
        }
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);