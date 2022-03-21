import './Registration.css';

function Registration() {
    return (
    <div id="page-title">
        <h1>Registration</h1>
        <div>
            <form>
                <label for="email">Email:</label>
                <input name="email" type="text"></input>
                <label for="username">Username:</label>
                <input name="username" type="text"></input>
                <label for="password">Password:</label>
                <input name="password" type="text"></input>
                <label for="repassword">Reenter Password:</label>
                <input name="repassword" type="text"></input>
                <a href = '/ '>
                <input id="create" type="button" value="Create"></input>
                </a>
            </form>
        </div>
    </div>
    )
}

export default Registration;