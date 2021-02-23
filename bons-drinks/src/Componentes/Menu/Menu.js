import React, { Component } from 'react';
import './Menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="menu">
                        <a className="menuOpcoes">Drinks</a>
                        <a className="menuOpcoes">Sobre Nós</a>
                        <a className="logo">Bons Drinks</a>
                        <a className="menuOpcoes">Nosso Time</a>
                        <a className="menuOpcoes">Contato</a>
                    </nav>
                </header>
            </div>
        )
    }
}
