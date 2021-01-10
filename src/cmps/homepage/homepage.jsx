import { Component } from 'react';
import homePageImgProf from '../../assets/img/prof3.png';
import './homepage.scss';
import 'wired-elements';
import { motion } from 'framer-motion';

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
							{/* <h2>Nice to meet you!</h2> */}
							<h1>Haleli Amiad</h1>
							<h2>Frontend / Full Stack Developer</h2>
						</motion.span>
						<motion.img
							className="prof-img"
							src={homePageImgProf}
							alt=""
							// initial={{ x: '101vw', rotate: 500 }}
							// transition={{ type: 'tween', stiffness: 4,duration: 0.5, delay: 0.1 }}
							// animate={{ x: 0, rotate:0 }}
							// exit
						/>
					</span>
				</span>
			</motion.div>
		);
	}
}
