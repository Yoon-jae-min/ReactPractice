class App extends React.Component{
    constructor(props){
        super(props)

        this.state = this.load()
    }

    load() {
        let output
        try{
            output = JSON.parse(localStorage.state)
        }
        catch(e){}

        if(output !== undefined && output.keyCount !== undefined && output.currentValue !== undefined){
            output = JSON.parse(localStorage.state)
        }
        else{
            output = {
                keyCount: 0,
                currentValue: '',
                todos: []
            }
        }
        return output
    }

    save(){
        localStorage.state = JSON.stringify(this.state)
    }

    componentDidUpdate(){
        this.save()
    }

    render(){
        return <div>
            <h1>할 일 목록</h1>
            <input value={this.state.currentValue}
                onChange={this.textChange}
                onKeyDown={this.textKeyDown}/>
            <button onClick={this.buttonClick}>추가하기</button>

            <div>
                {this.state.todos.map((todo) => {
                    return <ToDoList 
                        dataKey={todo.key}
                        isDone={todo.isDone}
                        text={todo.text}
                        removeItem={this.removeItem}
                        changeCheckData={this.changeCheckData}/>
                })}
            </div>
        </div>
    }

    textChange = (event) => {
        this.setState({
            currentValue: event.target.value
        })
    }

    textKeyDown = (event) => {
        let ENTER = 13
        if(event.keyCode === ENTER){
            this.buttonClick()
        }
    }

    buttonClick = (event) => {
        if(this.state.currentValue.trim() !== ''){
            this.setState({
                todos: [...this.state.todos, {
                    key: this.state.keyCount.toString(),
                    isDone: false,
                    text: this.state.currentValue
                }]
            })
            this.state.keyCount += 1
            this.state.currentValue = ''
        }
    }

    removeItem = (key) => {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.key !== key
            })
        })
    }

    changeCheckData = (key, changed) => {
        let target = [...this.state.todos]
        target.filter((todo) => todo.key === key)[0].isDone = changed
        this.setState({
            todos: target
        })
    }

}

class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isDone: props.isDone
        }
    }

    render(){
        let textStyle = {}
        textStyle.textDecoration = this.state.isDone ? 'line-through' : ''

        return <div style={textStyle}>
            <input 
            type="checkbox"
            checked={this.state.isDone}
            onChange={this.checkboxClick}/>
            <span>{this.props.text}</span>
            <button onClick={() => 
            this.props.removeItem(this.props.dataKey)}>제거</button>
        </div>
        
    }

    checkboxClick = (event) => {
        let changed = !this.state.isDone
        this.props.changeCheckData(this.props.dataKey, changed)
    }

    componentDidUpdate(prevProps){
        if(prevProps.isDone !== this.props.isDone){
            this.setState({
                isDone: this.props.isDone
            })
        }
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);