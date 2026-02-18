import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
	const [searchInput, setSearchInput] = useState('')
	const navigate = useNavigate()

	const handleSearch = (e) => {
		if (e.key === 'Enter' && searchInput.trim()) {
			navigate(`/search?q=${encodeURIComponent(searchInput)}`)
			setSearchInput('')
		}
	}

	const handleSearchClick = () => {
		if (searchInput.trim()) {
			navigate(`/search?q=${encodeURIComponent(searchInput)}`)
			setSearchInput('')
		}
	}

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

						<li className="nav-item">
							<div className="d-flex ms-3">
								<input
									type="text"
									className="form-control form-control-sm"
									placeholder="Search users..."
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
									onKeyPress={handleSearch}
									style={{ width: '150px' }}
								/>
								<button
									className="btn btn-outline-primary btn-sm ms-2"
									onClick={handleSearchClick}
								>
									Search
								</button>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
