import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './mainNavbar.scss';
import 'wired-elements';

export class _MainNavbar extends Component {

	render() {
		return (
			<nav className="main-navbar">
				<wired-card elevation="5">
					<span className="flex space-around">
						<NavLink to="/" activeClassName="active-page" exact>
							<wired-tab name="Home">Home</wired-tab>
						</NavLink>
						<NavLink to="/about" activeClassName="active-page" exact>
							<wired-tab name="About">About</wired-tab>
						</NavLink>
						<NavLink to="/projects" activeClassName="active-page" exact>
							<wired-tab name="Portfolio">Projects</wired-tab>
						</NavLink>
					</span>
				</wired-card>
			</nav>
		);
	}
}

export const MainNavbar = withRouter(_MainNavbar);
