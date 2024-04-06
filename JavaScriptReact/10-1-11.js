class App extends React.Component{
    render(){
        let list = [
            <li>사과</li>,
            <li>바나나</li>,
            <li>배</li>,
            <li>귤</li>
        ]
        
        return <ul>{list}</ul>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);