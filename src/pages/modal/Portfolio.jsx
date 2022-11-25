import { useRecoilState  } from 'recoil';
import { pink } from '../../styles/theme';
import styled from 'styled-components';
import { portfolioState } from '../../atom';
import { Fade } from 'react-reveal';

const Portfolio = () => {
    const [close, setClose] = useRecoilState(portfolioState)
    return (
        <PortfolioBlock>
									<Fade bottom big>
			<div className='box-inner-box center'>
				<div className='title-bar'>
					<div className='title-bar-text'> MY INFO</div>
					<div className='title-bar-controls'>
						<button aria-label='Minimize'></button>
						<button aria-label='Maximize'></button>
						<button
							aria-label='Close'
							onClick={() => {
								setClose(!close);
							}}></button>
					</div>
				</div>
				{/* content */}
				<main className='info-inner-box center '>
						<iframe src='https://tmdcjf152.github.io/myInfoPage/#/project' width='100%' height='100%'>
							iframe을 지원하는 웹 브라우저를 이용해주세요 (해당 사이트는 Google Chrome을 권장합니다.)
						</iframe>
				</main>
			</div>
			</Fade>
    </PortfolioBlock>
  );
};

export default Portfolio;

const PortfolioBlock = styled.div`
		.box-inner-box {
		position: fixed;
		top: 20px;
		left: 100px;
		flex-direction: column;
		width: 90%;
		height: 90vh;
		border: 1px solid #666;
		z-index: 2;
		/* 콘텐츠부분 */
		.info-inner-box {
			width: 100%;
			height: 100%;
			padding: 10px;
			background: #ddd;
			.table-box {
				width: 420px;
				height: 100%;
				background-color: red;
			}
		}
	}
`;