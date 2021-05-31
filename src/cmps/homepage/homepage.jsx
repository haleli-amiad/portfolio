import { Component } from 'react';
import homePageImgProf from '../../assets/img/avatar.PNG';
import './homepage.scss';
import 'wired-elements';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'wired-elements';
export class Homepage extends Component {
	render() {
		return (
			<motion.div
				className="homepage main-layout"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<span className="main-text flex align-center wrap space-around">
					<motion.span className="flex column wrap">
						<h1>Haleli Amiad</h1>
						<h2>Frontend / Full Stack Developer</h2>
						<Link className="cta-btn" to="/about">
							<motion.button
								className="btn"
								whileHover={{
									scaleY: 1.05,
									scaleX: 1.05,
									originX: 0
								}}
								whileTap={{ scale: 1.04 }}
								transition={{ type: 'tween', stiffness: 300, duration: 0.6 }}
							>
								{/* <button elevation="4"> */}
								Nice to meet you →
								{/* </button> */}
							</motion.button>
						</Link>
					</motion.span>
					<div className="img-container">
						<motion.img className="prof-img" src={homePageImgProf} alt="" />
					</div>
				</span>
			</motion.div>
		);
	}
}
