import React, { Component } from 'react'
import './FaleConosco.css'

export default class FaleConosco extends Component {
    render() {
        return (
            <div className='form'>
                <h1>Fale Conosco</h1>
                
                <section className="form">
                    <img src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form>
                    <label>Nome</label>
                    <input></input>
                    <br></br>
                    <label>Email</label>
                    <input></input>
                    <br></br>
                    <label>Mensagem</label>
                    <textarea name="mensagem" rows="5" cols="50"></textarea>
                    <br></br>
                    <button type="button">Enviar</button>
                    </form>
                </section>
            </div>
        )
    }
}
