import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">wG</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contacts" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
								Contacts
							</NavLink>
						</li>

                        <li className="nav-item">
							<NavLink to="/fetch" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
								Fetch
							</NavLink>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
