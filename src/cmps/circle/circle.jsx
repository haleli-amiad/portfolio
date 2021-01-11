import circle from '../../assets/img/circle2.png';
import { Component } from 'react';
import { motion } from 'framer-motion';
import './circle.scss';

export class Circle extends Component {
	render() {
		return (
			<motion.img
				className="circle"
				src={circle}
                animate={{ rotate: -360 }}
                transition={{ ease: "linear", duration: 8, repeat: Infinity }}
			/>
		);
	}
}
