class App extends React.Component{
    render(){
        return <div>
                <h1>{this.props.name}님 안녕하세요!</h1>
                <img src={this.props.imgUrl}/>
        </div>
    }
}

let container = document.getElementById('root');
ReactDOM.render(<App name="구름" imgUrl="http://placedog.net/400/200"/>, container);