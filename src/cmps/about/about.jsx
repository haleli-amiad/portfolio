import { Component } from 'react';
import mika from '../../assets/img/mika1.png';
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
				<span className="flex wrap">
					<img src={mika} alt="" />
					<span className="main-text flex justify-center column wrap">
						<wired-card elevation="2">
							<p>
								Hey ya! My name is Haleli (it means something like Hallelujah), I'm 28 years old,
								Israeli, who has the great pleasure of living in Rome for over the last three years.
								What can I say? I was magnetized by the Italian culture.
							</p>
							<p>
								My favorite part about coding is watching the combination of shapes - letters - becoming
								a beautiful and functional digital product. 
							</p>
							<p>
								<span className="bold"> i want to be a part of something great. </span>
								I profoundly believe in good karma and that is what I'm trying to bring to the table.
							</p>
							<p>
								Vue.js, Vuex, React, Redux, Angular, Rxjs, Node.js, MongoDB, REST API's, Sass, Git
								workflow are just part of my tools and I am constantly trying to learn more and get a deeper understanding of these amazing tools.
							</p>
						</wired-card>
					</span>
				</span>
			</motion.div>
		);
	}
}
