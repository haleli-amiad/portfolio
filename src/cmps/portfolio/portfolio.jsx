import { Component } from 'react';
import 'wired-elements';
import './portfolio.scss';
import { motion } from 'framer-motion';

import { projects } from '../../data';
export class Portfolio extends Component {
	render() {
		return (
			<motion.div
				className="portfolio main-layout"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2, type: 'tween' }}
			>
				<span className="projects-list flex">
					{projects.map((project) => (
						<motion.div
							className="project"
							whileHover={{
								scale: 1.01,
								originZ: 0
							}}
							whileTap={{ scale: 1.01 }}
							transition={{ type: 'tween', stiffness: 300, duration: 0.2 }}
							key={project.name}
						>
							<div className="card">
								<a href={project.linkTo} target="_blank" rel="noreferrer">
									<h4>{project.name}</h4>
									<span>
										{project.img && <img src={project.img} alt="" />}
										<h5>{project.desc}</h5>
									</span>
									<h6>({project.techs})</h6>
								</a>
							</div>
						</motion.div>
					))}
				</span>
			</motion.div>
		);
	}
}
