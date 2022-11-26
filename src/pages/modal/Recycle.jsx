import { useRecoilState } from 'recoil';
import { pink } from '../../styles/theme';
import styled from 'styled-components';
import { recycleState } from '../../atom';
import { Fade } from 'react-reveal';

const Recycle = () => {
	const [close, setClose] = useRecoilState(recycleState);
	return (
		<RecycleBlock>
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
					<main className='info-inner-box center '></main>
				</div>
			</Fade>
		</RecycleBlock>
	);
};

export default Recycle;

const RecycleBlock = styled.div`
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
