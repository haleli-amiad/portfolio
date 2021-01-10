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
					<img
						src={mika}
						alt=""
					/>
					<span className="main-text flex justify-center column wrap">
						<wired-card elevation="2">
							{/* <h3>Nice to meet ya</h3> */}
							{/* <p>(It's means something like Hallelujah.)</p> */}
							<p>
								{/* It's great to see you here! */}
								Hey ya! My name is Haleli (it means something like Hallelujah), I'm 28 years old, Israeli, who
								has the great pleasure of living in Rome over the last three years. Pizza life chose me
								and I had to obey.
							</p>
							{/* <p>
								When I was 10 years old I built a website (It was just HTML and CSS back then) that
								provides banners and logos that I created with Photoshop, It took another 17 years to
								figure out that's what I want to do in life.
							</p> */}
							{/* <p>
								Vue.js, Vuex, React, Redux, Angular, Rxjs, Node.js, MongoDB, REST API's, Sass, Git
								workflow are just part of the tools I own, and I can't wait to get some more.
							</p> */}
							<p>
								My favorite part about coding is watching the combination of shapes - letters - become a beautiful and functional digital product.
								{/* I enjoy design almost as much I enjoy coding,  */}
							</p>
							<p>
								<span className="bold"> i want to be a part of something great. </span>
								I profoundly believe in good karma, and that is what i want to bring to a table, that serves it back.
								It might sound cheesy, but that's the truth.
							</p>
							<p>
								Vue.js, Vuex, React, Redux, Angular, Rxjs, Node.js, MongoDB, REST API's, Sass, Git
								workflow are just part of the tools I own, and I constantly trying to learn them deeper, and pick some more.
							</p>
						</wired-card>
					</span>
				</span>
			</motion.div>
		);
	}
}
