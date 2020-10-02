import React from 'react';

export default function Login() {
    state = {
        name: '',
        pass: '',
        redirect: false
    }

    handleSubmit = (e) => {
        if (this.state.name === "Alireza" || this.state.pass === 123) {
            console.log("Welcome")
            this.setState({
                name: '',
                pass: '',
                redirect: true
            })

        }
        else
            console.log("Wrong")

        e.preventDefault()
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    handelChangePassword = e => {
        this.setState({ pass: e.target.value })
    }

    validateForm = () => {
        return this.state.pass.length > 0 && this.state.name.length > 0
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    if (this.state.redirect) {
        return <Redirect push to="/main" />;
    }

    return (
        <div className="login-form">
            Log in to system to use all about <b style={{ color: "blue" }}>DESS</b>
            <br />
          security tool
            <form action="" style={{ marginTop: 30 }}>
                <div className="label-highlight">Username</div>
                <div><input type="text" value={this.state.name} onChange={this.handleChangeName} className="input-highlight" /></div>

                <div style={{ marginTop="4%" }}>
                    <div className="label-highlight">Password</div>
                    <div><input type="password" value={this.state.pass} onChange={this.handelChangePassword} className="input-highlight" /></div>
                </div>

                <button onClick={this.handleSubmit} disabled={!this.validateForm()} className="login-button">Log in</button>
            </form>
        </div>
    );
} 