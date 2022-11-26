import { useEffect, useState } from 'react';
import { infoState, introState, portfolioState, recycleState, skillState } from '../atom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StartMenu = ({ toggle }) => {
	const [icon, setIcon] = useState([]);
	const [blog, setBlog] = useState([]);
	const [info, setInfo] = useRecoilState(infoState);
	const [skill, setSkill] = useRecoilState(skillState);
	const [intro, setIntro] = useRecoilState(introState);
	const [portfolio, setPortfolio] = useRecoilState(portfolioState);
	const [recycle, setRecycle] = useRecoilState(recycleState);

	useEffect(() => {
		fetch('data/icon.json')
			.then((res) => res.json())
			.then((res) => setIcon(res.data));
	}, []);

	useEffect(() => {
		fetch('data/blog.json')
			.then((res) => res.json())
			.then((res) => setBlog(res.data));
	}, []);

	return (
		<StartMenuBlock>
			<div className={toggle === true ? 'start-menu-inner-box-active' : 'start-menu-inner-box'}>
				<div className='logo-box'>
					<span>Windows98</span>
				</div>
				<div className='menu-box'>
					<ul className='menu-list-box'>
						{icon.map((icon) => {
							return (
								<>
									<li
										className='menu-icon'
										onClick={() => {
											if (icon.id === 1) {
												setInfo(!info);
											}
											if (icon.id === 2) {
												setSkill(!skill);
											}
											if (icon.id === 3) {
												setIntro(!intro);
											}
											if (icon.id === 4) {
												setPortfolio(!portfolio);
											}
											if (icon.id === 5) {
												setRecycle(!recycle);
											}
										}}>
										<div className='img-box'>
											<img src={icon.img} alt='' />
										</div>
										<div className='text-box'>
											<span className='center'>{icon.name}</span>
										</div>
									</li>
									<div className='line'></div>
								</>
							);
						})}
						{/* 벨로그 */}
						<a className='menu-icon' target='blank' href='https://velog.io/@tmdcjf152'>
							<div className='img-box'>
								<img src='https://ifh.cc/g/XafAog.png' alt='' />
							</div>
							<div className='text-box'>
								<span className='center'>Velog</span>
							</div>
						</a>
						<div className='line'></div>
						{/* 깃허브 */}
						<a className='menu-icon' target='blank' href='https://github.com/tmdcjf152'>
							<div className='img-box'>
								<img src='https://ifh.cc/g/vlYZkS.png' alt='' />
							</div>
							<div className='text-box'>
								<span className='center'>GitHub</span>
							</div>
						</a>
						<div className='line'></div>
						{/* 노션 */}
						<a className='menu-icon' target='blank' href='https://merciful-collard-211.notion.site/About_Me-c0584bd97798443484007b5b082d24c1'>
							<div className='img-box'>
								<img src='https://ifh.cc/g/7cjVgH.png' alt='' />
							</div>
							<div className='text-box'>
								<span className='center'>Notion</span>
							</div>
						</a>
						<div className='line'></div>
						{/* 로그아웃 */}
						<Link to='/' className='menu-icon'>
							<div className='img-box-off'></div>
							<div className='text-box'>
								<span className='center'>로그아웃</span>
							</div>
						</Link>
					</ul>
				</div>
			</div>
		</StartMenuBlock>
	);
};

export default StartMenu;

const StartMenuBlock = styled.div`
	position: relative;
	overflow: hidden;
	.start-menu-inner-box {
		width: 300px;
		height: 0px;
		background: #c8c8c8;
		border: 1px solid #000;
		transition: all 0.5s;
		opacity: 0;
		.logo-box {
			display: none;
		}
		.menu-box {
			display: none;
		}
	}
	.start-menu-inner-box-active {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
		height: 590px;
		background: #c8c8c8;
		border: 1px solid #000;
		transition: all 0.5s;
		opacity: 1;
		.logo-box {
			display: flex;
			justify-content: flex-end;
			align-items: flex-start;
			width: 30px;
			height: 100%;
			background-image: linear-gradient(#c8c8c8, #0000b6);
			writing-mode: vertical-rl;
			span {
				margin: 10px;
				font: bold 20px/1 'Do Hyun';
				color: #eee;
			}
		}
		.menu-box {
			width: 100%;
			height: 100%;
			.menu-icon {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				cursor: pointer;
				&:hover {
					background: #0000b6;
					color: #fff;
				}
				.img-box {
					width: 80px;
				}
				.img-box-off {
					height: 60px;
				}
				.text-box {
					width: 100%;
					text-align: center;
					font: 17px/1 'Do Hyun';
				}
			}
			.line {
				width: 80%;
				height: 1px;
				margin: 0 auto;
				border-top: 1px dotted #888;
			}
		}
	}
`;
