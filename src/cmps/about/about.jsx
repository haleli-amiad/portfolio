import { Component } from 'react';
import avatar from '../../assets/img/avatar2.PNG';
import './about.scss';
import 'wired-elements';
import { motion } from 'framer-motion';

export class About extends Component {
	render() {
		return (
			<motion.div
				className="main-layout about-page"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2, type: 'tween' }}
			>
				<span className="content-container">
					<span className="main-text flex justify-center column wrap">
					<img src={avatar} alt="" />
						<div className="text">
							<p>
								Holla! My name is Haleli (it means something like Hallelujah), 29 years old, Israeli,
								who has the great pleasure of living in Rome over the last four years.
							</p>
							<p>
								I'm a results-driven Junior Frontend developer, with a vast passion for design and
								aesthetics. Autodidact and curious, striving to get better every day - to write cleaner
								code, expand knowledge, and perform faster.
							</p>
							<p>
								Vue.js and Vuex, React.js and Redux, MongoDB, node.js, and Git workflow are just part of
								my tools and I am constantly trying to deepen my knowledge and understanding of these
								amazing tools.
							</p>
						</div>
					</span>
				</span>
			</motion.div>
		);
	}
}
