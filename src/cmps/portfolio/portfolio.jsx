import { Component } from 'react';
import 'wired-elements';
import './portfolio.scss';
import { motion } from 'framer-motion';
import webix from '../../assets/img/app-img/webix.jpg';
import memit from '../../assets/img/app-img/memit.jpg';
import yesshecan from '../../assets/img/app-img/yesshecan.jpg';
import minesweeper from '../../assets/img/app-img/minesweeper.jpg';
import youdoob from '../../assets/img/app-img/youdoob.jpg';
import misterbitcoin from '../../assets/img/app-img/misterbitcoin.jpg';
export class Portfolio extends Component {
	state = {
		projects: [
			{
				name: 'Webix',
				desc: 'website creating app (WIX inspired)',
				linkTo: 'http://webixapp.herokuapp.com/',
				techs: 'Vue.js, Node.js, MongoDB',
				img: webix
			},
			{
				name: 'MineSweeper',
				desc: 'The old good game with a different design',
				linkTo: 'https://haleli-amiad.github.io/minesweeper/',
				techs: 'Vanilla JS',
				img: minesweeper
			},
			{
				name: 'Memit',
				desc: "Meme Generator - 90's cartoons themed",
				linkTo: 'https://haleli-amiad.github.io/meme-gen/',
				techs: 'Vanilla JS',
				img: memit
			},
			{
				name: 'Yes She Can',
				desc: 'Productive app that combines mail, notes and books list',
				linkTo: 'https://zoharsela.github.io/app-she-can/#/',
				techs: 'Vue.js',
				img: yesshecan
			},
			{
				name: 'Mister Bitcoin',
				desc: 'App that allows to keep track on rates and transfer bitcoins',
				linkTo: 'https://haleli-amiad.github.io/mrBitcoin/',
				techs: 'React',
				img: misterbitcoin
			},
			{
				name: 'YouDoob',
				desc: 'Music player based on YouTube API',
				linkTo: 'https://haleli-amiad.github.io/youdoob/#/',
				techs: 'Vue.js',
				img: youdoob
			}
		]
	};
	render() {
		const { projects } = this.state;
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
								scale: 1.03,
								originZ: 0
							}}
							whileTap={{ scale: 1.03 }}
							transition={{ type: 'tween', stiffness: 300, duration: 0.6 }}
							key={project.name}
						>
							<wired-card>
								<a href={project.linkTo} target="_blank" rel="noreferrer">
									{project.img && <wired-image src={project.img} alt="" />}
									<h4>{project.name}</h4>
									<h5>{project.desc}</h5>
									<h6>({project.techs})</h6>
								</a>
							</wired-card>
						</motion.div>
					))}
				</span>
			</motion.div>
		);
	}
}
