import { Component } from 'react';
import 'wired-elements';
import './socials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class Socials extends Component {
	render() {
		return (
			<div className="socials">
				<wired-card elevation="3">
                    <a href="https://github.com/haleli-amiad" target="_blank" rel="noreferrer">
					<wired-icon-button className="soc-btn">
						<FontAwesomeIcon className="fa-icon" icon={faGithub} />
					</wired-icon-button>
                    </a>
                    <a href="https://www.linkedin.com/in/haleli-amiad/" target="_blank" rel="noreferrer">
					<wired-icon-button className="soc-btn">
						<FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
					</wired-icon-button></a>
                    <a href="mailto:haleli.am@gmail.com" target="_blank" rel="noreferrer">
					<wired-icon-button className="soc-btn">
						<FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
					</wired-icon-button>
                    </a>
				</wired-card>
			</div>
		);
	}
}
