function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

// let user = {
//     firstName: 'Inje',
//     lastName: 'Lee'
// };

let user = null;

let root = document.getElementById('root');
ReactDOM.render(getGreeting(user), root);