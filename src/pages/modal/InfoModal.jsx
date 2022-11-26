import { useRecoilState } from 'recoil';
import { pink } from '../../styles/theme';
import styled from 'styled-components';
import { infoState } from '../../atom';
import { Fade } from 'react-reveal';

const InfoModal = () => {
	const [close, setClose] = useRecoilState(infoState);

	return (
		<InfoModalBlock>
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
						<iframe src='https://tmdcjf152.github.io/myInfoPage/' width='100%' height='100%'>
							iframe을 지원하는 웹 브라우저를 이용해주세요 (해당 사이트는 Google Chrome을 권장합니다.)
						</iframe>
					</main>
				</div>
			</Fade>
		</InfoModalBlock>
	);
};

export default InfoModal;

const InfoModalBlock = styled.div`
	.box-inner-box {
		position: fixed;
		margin: 0 auto;
		bottom: 70px;
		left: 0;
		right: 0;
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

		}
	}
	@media screen and (max-width: 1028px) {
		.box-inner-box {

		bottom: 42px;
		left: 0;
		right: 0;
		flex-direction: column;
		width: 100%;
		height: 95vh;
	}
}

	`;
