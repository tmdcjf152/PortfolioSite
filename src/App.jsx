import { HashRouter, Route, Routes } from 'react-router-dom';
import Loading from './pages/Loading';
import MainPage from './pages/MainPage';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { createGlobalStyle } from 'styled-components';

const App = () => {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<HashRouter>
				<Routes>
					<Route path='/' element={<Loading />} />
					<Route path='/main' element={<MainPage />} />
				</Routes>
			</HashRouter>
		</RecoilRoot>
	);
};

export default App;

const GlobalStyle = createGlobalStyle`


  *{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'apple'
  }

  a{
	text-decoration: none;
  }
  
  .center{
	display: flex;
	justify-content: center;
	align-items: center;
  }
  img{
	width: 100%;
	height: 100%;
	object-fit: contain;
  }
  .title-bar {
			width: 100%;
			height: 30px;
			.title-bar-controls {
				button {
					width: 20px;
					height: 20px;
					font-size: 1.2rem;
					margin-right: 5px;
					&:nth-of-type(1){
						background-position: 7px;
					}
					&:nth-of-type(2){
						background-position: 4.7px;
					}
					&:nth-of-type(3){
						background-position: 6px;
					}
				}
			}
			.title-bar-text {
				font: bold 1.2rem/1 'apple';
			}
		}
		.content-box {
			width: 100%;
			height: 100%;
		}


  `;
