function MyButton(props){
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button',
        {onClick: () => {
            let value;
            if(isClicked == true){
                value = false;
            }else value = true;
            setIsClicked(value);
        }},
        isClicked ? 'Clicked!' : "Click here!"
    )
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);