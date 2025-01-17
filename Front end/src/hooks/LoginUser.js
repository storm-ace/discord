export async function UserLogin(userLogin, onChangeAuth) {
    const url = `https://localhost:7029/api/Auth/login`;

    // Return the Promise generated by the fetch operation
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            username: userLogin.username,
            password: userLogin.password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    console.log(json)
    onChangeAuth(json);
}