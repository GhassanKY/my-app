import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const NavBarComponent = () => {

    const navBar = ['Noticias', 'Acerca de Nostros', 'Contactanos']



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                navBar.map((navbar, index) => {
                                    return (
                                        <li className="nav-item" key={index} >
                                            <a className="nav-link" href="#"> {navbar} </a>
                                        </li>
                                    )
                                }
                                )
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
