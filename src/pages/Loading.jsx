import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Loading = () => {
	return (
		<LoadingBlock>
			<Zoom>
				<div id='image'>
					<div id='top'>
						<div id='sky'></div>
					</div>
					<div id='bottom'>
						<div id='ground'></div>
					</div>
					<div id='text'>
							<h1>
								HELLO WORLD!
								<br />
								MY PORTFOLIO WEBSITE
							</h1>
						<Link to='/main'>
							<Fade bottom cascade delay={1500}>
								<h2>
									Go to Main Page
									</h2>
							</Fade>
						</Link>
					</div>
				</div>
			</Zoom>
		</LoadingBlock>
	);
};

export default Loading;

const LoadingBlock = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #0c0c4a;
	@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Yellowtail&display=swap');
	:root {
		--navy: #0c0c4a;
		--dark-navy: #060726;
		--pink: rgba(213, 84, 213, 1);
		--pink2: rgba(213, 84, 213, 0.7);
	}
	* {
		margin: 0;
		padding: 0;
	}
	*::before,
	::after {
		content: '';
		position: absolute;
	}
	body {
		width: 100vw;
		height: 100vh;

		display: grid;
		place-items: center;
		filter: saturate(130%) contrast(125%);
	}
	#image {
		overflow: hidden;
		width: 95%;
		height: 90%;
		background: var(--navy);
		display: grid;
		background: #0c0c4a;
		position: relative;
		border: 8px solid;
		border-color: darkmagenta magenta;
		outline: 8px ridge cyan;
		outline-offset: 4px;
		#top {
			height: 67%;
			background: linear-gradient(transparent 50%, hotpink 160%);
			box-shadow: 0 15px 50px 1px white;
			position: relative;
			#sky {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;

				background: repeating-linear-gradient(pink 2px, transparent 3px, transparent 30px),
					repeating-linear-gradient(90deg, pink 2px, transparent 3px, transparent 40px) 10px 0;
				filter: drop-shadow(0 0 1px magenta) drop-shadow(0 0 3px magenta) drop-shadow(0 0 7px cyan);
				animation: move 10s linear infinite;
				opacity: 0.2;
			}
		}
		#bottom {
			position: absolute;
			z-index: 2;
			width: 100%;
			height: 100%;
			transform: perspective(500px) rotateX(65deg);
			bottom: -15%;
			background: linear-gradient(90deg, hotpink -60%, transparent 40%, transparent 60%, hotpink 140%);
			clip-path: polygon(0 100%, 0 55%, 100% 55%, 100% 100%);
			#ground {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 55%;
				background: repeating-linear-gradient(white 2px, transparent 3px, transparent 30px),
					repeating-linear-gradient(90deg, white 2px, transparent 3px, transparent 40px);
				filter: drop-shadow(0 0 1px cyan) drop-shadow(0 0 3px cyan) drop-shadow(0 0 7px cyan);
				animation: move 10s linear infinite;
			}
		}
		#text {
			position: absolute;
			z-index: 10;
			width: 100%;
			height: 100%;
			top: 0;
			display: flex;
			flex-direction: column;
			place-items: center;
			justify-content: center;
			h1 {
				color: transparent;
				font-family: 'Russo One', sans-serif;
				text-transform: uppercase;
				text-align: center;
				font-size: 8em;
				transform: translatey(-150px);
				background: linear-gradient(cornflowerblue 30%, white, darkmagenta 60%, cornflowerblue 100%);
				background-size: contain;
				-webkit-background-clip: text;
				-webkit-text-stroke: 1px silver;
				filter: drop-shadow(5px 5px 1px black) drop-shadow(1px 1px 1px magenta);
				animation: bg-shift 0.5s ease-in-out infinite alternate;
			}
			h2 {
				color: transparent;
				font-family: 'Russo One', sans-serif;
				text-transform: uppercase;
				text-align: center;
				font-size: 8em;
				color: #eeeeee80;
				text-shadow: 1px 1px 1px 10px #000;
				transform: translatey(-50px);
				background-size: contain;
				-webkit-background-clip: text;
				-webkit-text-stroke: 1px silver;
				filter: drop-shadow(5px 5px 1px black) drop-shadow(1px 1px 1px magenta);
				animation: bg-shift 0.5s ease-in-out infinite alternate;
				transition: all 0.5s;
				&:hover{
					color: cornflowerblue;
				}
			}
		}
	}

	@keyframes move {
		to {
			background-position-y: 2000px;
		}
	}
	@keyframes bg-shift {
		0% {
			background-position: 0 -25px;
		}
		100% {
			background-position: 0 25px;
		}
	}

	@keyframes hover {
		0% {
			transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
		}
		50% {
			transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(50px);
		}
		100% {
			transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
		}
	}
`;
