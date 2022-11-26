import styled from 'styled-components';
import { SiWindows95 } from 'react-icons/si';
import StartMenu from './StartMenu';
import { useState } from 'react';

const Footer = () => {
	const [toggle, setToggle] = useState(false);
	const todayTime = () => {
		let now = new Date();
		let todayMonth = now.getMonth() + 1;
		let todatDate = now.getDate();
		const week = ['일', '월', '화', '수', '목', '금', '토'];
		let dayOfWeek = week[now.getDay()];
		let hours = now.getHours();
		let minutes = now.getMinutes();

		return todayMonth + '월 ' + todatDate + '일 ' + dayOfWeek + '요일 ' + hours + '시 ' + minutes + '분';
	};

	return (
		<FooterBlock>
			<div className='footer-inner-box'>
				<div className='menu-inner-box'>{toggle === true ? <StartMenu toggle={toggle} /> : <StartMenu toggle={toggle} />}</div>

				<div
					className='start-box center'
					onClick={() => {
						setToggle(!toggle);
					}}>
					<SiWindows95 />시 작
				</div>
				<div className='time-box center'>{todayTime()}</div>
			</div>
		</FooterBlock>
	);
};

export default Footer;

const FooterBlock = styled.footer`

	.footer-inner-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: #c8c8c8;
		border: 1px solid #000;
z-index: 2;
		.menu-inner-box {
			position: absolute;
			bottom: 48px;
		}
		.start-menu-box {
			height: 0px;
			position: absolute;
			bottom: 50px;
			transition: all 0;
		}
		.start-menu-box-active {
			height: 500px;
			position: absolute;
			bottom: 50px;
			transition: all 0;
		}
		.start-box {
			width: 120px;
			height: 80%;
			margin-left: 10px;
			border: 1px solid #333;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
			font-size: 1.5em;
			font-family: 'apple';
			cursor: pointer;
			&:active {
				box-shadow: #333 0px 2px 4px 0px inset;
			}
			svg {
				margin-right: 10px;
				font-size: 1.3em;
			}
		}
		.time-box {
			width: 200px;
			height: 80%;
			margin-right: 10px;
			border: 1px solid #666;
			box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
		}
	}
`;
