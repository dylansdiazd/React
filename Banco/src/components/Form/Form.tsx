

export const Form = () => {
    return (
        <div className="form">
            <h1>Faça o Login</h1>
            <label htmlFor="emailInput">Email</label>
            <input id="emailInpit" type="text" />

            <label htmlFor="passwordInput">Senha</label>
            <input id='passwordInput' type="password" />
            <button>Entrar</button>
        </div>
    )
}