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
				<footer>
                    <a href="https://github.com/haleli-amiad" target="_blank" rel="noreferrer">
						<span className="soc-btn">

					{/* <wired-icon-button className="soc-btn"> */}
						<FontAwesomeIcon className="fa-icon" icon={faGithub} />
						</span>
					{/* </wired-icon-button> */}
                    </a>
                    <a href="https://www.linkedin.com/in/haleli-amiad/" target="_blank" rel="noreferrer">
					{/* <wired-icon-button className="soc-btn"> */}
					<span className="soc-btn">
							
						<FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
							</span>
					{/* </wired-icon-button></a> */}
					</a>
                    <a href="mailto:haleli.am@gmail.com" target="_blank" rel="noreferrer">
					<span className="soc-btn">
							
					{/* <wired-icon-button className="soc-btn"> */}
						<FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
							</span>
					{/* </wired-icon-button> */}
                    </a>
				</footer>
			</div>
		);
	}
}
