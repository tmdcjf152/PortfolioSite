import { useEffect, useState } from 'react';
import InfoModal from './modal/InfoModal';
import SkillModal from './modal/SkillModal';
import IntroducationModal from './modal/Introducation';
import PortfolioModal from './modal/Portfolio';
import Recycle from './modal/Recycle';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { infoState, introState, portfolioState, recycleState, skillState } from '../atom';
import { Fade } from 'react-reveal';

const MainPage = () => {
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
		<>
			<MainPageBlock>
				<div className='modal-box'>
					{info === true ? <InfoModal /> : null}
					{skill === true ? <SkillModal /> : null}
					{intro === true ? <IntroducationModal /> : null}
					{portfolio === true ? <PortfolioModal /> : null}
					{recycle === true ? <Recycle /> : null}
				</div>

				<Fade delay={1000}>
					<div className='main-inner-box'>
						<div className='icon-box'>
							{icon.map((icon, index) => {
								return (
									<div
										className='my-icon-box'
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
										}}
										key={icon.id}>
										<img src={icon.img} alt='' />
										<span className='center'>{icon.name}</span>
									</div>
								);
							})}
						</div>
						<div className='blog-box'>
							<a className='my-icon-box' target='blank' href='https://velog.io/@tmdcjf152'>
								<img src='https://ifh.cc/g/XafAog.png' alt='' />
								<span className='center'>Velog</span>
							</a>
							<a className='my-icon-box' target='blank' href='https://github.com/tmdcjf152'>
								<img src='https://ifh.cc/g/vlYZkS.png' alt='' />
								<span className='center'>GitHub</span>
							</a>
							<a className='my-icon-box' target='blank' href='https://merciful-collard-211.notion.site/About_Me-c0584bd97798443484007b5b082d24c1'>
								<img src='https://ifh.cc/g/7cjVgH.png' alt='' />
								<span className='center'>Notion</span>
							</a>
						</div>
					</div>
				</Fade>
			</MainPageBlock>
			<Footer />
		</>
	);
};

export default MainPage;

const MainPageBlock = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-image: url('https://free4kwallpapers.com/uploads/originals/2019/12/21/alien-moon---rmradev-wallpaper.jpg');
	background-size: cover;
	overflow: hidden;
	.main-inner-box {
		display: flex;
		justify-content: flex-start;
		position: relative;
		width: 100%;
		height: 100%;
		margin-left: 10px;
		z-index: 1;
		.icon-box {
			width: 120px;
			height: 100%;
			display: flex;
			justify-content: flex-star;
			align-items: flex-start;
			flex-direction: column;
			.my-icon-box {
				width: 120px;
				height: 120px;
				margin-bottom: 1rem;
				padding-bottom: 40px;
				font: bold 1.1rem/0.5 'apple';
				cursor: pointer;

				&:hover {
					border: 1px dotted #000;
					background: #0000ff42;
				}
				img {
					width: 100%;
					height: 100%;
					transition: all 0.5s;
					&:hover {
						transform: scale(1.1);
					}
				}
				.text-center {
					text-align: center;
					line-height: 1;
				}
			}
		}
		.blog-box {
			width: 120px;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;

			.my-icon-box {
				width: 120px;
				height: 120px;
				margin-bottom: 1rem;
				padding-bottom: 40px;
				font: bold 1.1rem/0.5 'apple';
				cursor: pointer;
				&:hover {
					border: 1px dotted #000;
					background: #0000ff42;
				}
				img {
					width: 100%;
					height: 100%;
					transition: all 0.5s;
					&:hover {
						transform: scale(1.1);
					}
				}
				.center {
					text-align: center;
					line-height: 1;
					color: #000;
				}
			}
		}
	}
`;
