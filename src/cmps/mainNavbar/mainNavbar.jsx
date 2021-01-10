import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './mainNavbar.scss';
import 'wired-elements';
import { motion } from 'framer-motion';

export class _MainNavbar extends Component {

	render() {
		return (
			<motion.nav className="main-navbar"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{scale: 1.005}}
			transition={{ duration: 0.4 }}>
				<wired-card elevation="5">
					<span className="flex space-around">
						<NavLink to="/" activeClassName="active-page" exact>
							<wired-tab name="Home">Home</wired-tab>
						</NavLink>
						<NavLink to="/about" activeClassName="active-page" exact>
							<wired-tab name="About">About</wired-tab>
						</NavLink>
						<NavLink to="/portfolio" activeClassName="active-page" exact>
							<wired-tab name="Portfolio">Portfolio</wired-tab>
						</NavLink>
					</span>
				</wired-card>
			</motion.nav>
		);
	}
}

export const MainNavbar = withRouter(_MainNavbar);
