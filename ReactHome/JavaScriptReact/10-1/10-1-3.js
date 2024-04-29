class App extends React.Component{
    render(){
        return <h1>리액트 기본</h1>
    }
}

let container = document.getElementById('root');
ReactDOM.render(<App />, container);