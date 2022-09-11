import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './Navbar.css'
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                        <div className="color-picker" onClick={props.changeColor}>
                            <div className="box light-green" style={{backgroundColor:"#006400"}} ></div>
                            <div className="box light-red" style={{backgroundColor:"#DC143C"}}></div>
                            <div className="box orange" style={{backgroundColor:'#008B8B'}}></div>
                            <div className='box yellow' style={{backgroundColor:'#8B0000'}}></div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                            <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                            <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Enable DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    aboutText :PropTypes.string
}
Navbar.defaultProps = {
    title:'Set title here',
    aboutText:'About'
}