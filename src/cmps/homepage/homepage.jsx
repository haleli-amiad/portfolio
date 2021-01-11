import { Component } from 'react';
import homePageImgProf from '../../assets/img/prof3.png';
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
				<span className="main-text flex justify-center column wrap">
					<span className="flex align-center wrap space-around">
						<motion.span className="flex column wrap">
							<h1>Haleli Amiad</h1>
							<h2>Frontend / Full Stack Developer</h2>
							<motion.div
								className="btn"
								whileHover={{
									scaleY: 1.05,
									scaleX: 1.05,
									originX: 0
								}}
								whileTap={{ scale: 1.04 }}
								transition={{ type: 'tween', stiffness: 300, duration: 0.6 }}
							>
								<wired-button>
									<Link className="cta-btn" to="/about">
										Nice to meet you →
									</Link>
								</wired-button>
							</motion.div>
						</motion.span>
						<motion.img className="prof-img" src={homePageImgProf} alt="" />
					</span>
				</span>

			</motion.div>
		);
	}
}
