import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './mainNavbar.scss';
import 'wired-elements';

export class _MainNavbar extends Component {

	render() {
		return (
			<nav className="main-navbar">
				{/* <wired-card elevation="5"> */}
				{/* <div className="nav-container"> */}

					<span className="flex space-around">
						<NavLink to="/" activeClassName="active-page" exact>
							<span className="nav-link">Home</span>
						</NavLink>
						<NavLink to="/about" activeClassName="active-page" exact>
							<span className="nav-link">About</span>
						</NavLink>
						<NavLink to="/projects" activeClassName="active-page" exact>
							<span className="nav-link">Projects</span>
						</NavLink>
					</span>
				{/* </div> */}
				{/* </wired-card> */}
			</nav>
		);
	}
}

export const MainNavbar = withRouter(_MainNavbar);
