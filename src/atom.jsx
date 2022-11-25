import { atom } from 'recoil';

export const infoState = atom({
	key: 'info',
	default: false,
});

export const skillState = atom({
	key: 'skill',
	default: false,
});

export const introState = atom({
	key: 'intro',
	default: false,
});

export const portfolioState = atom({
	key: 'portfolio',
	default: false,
});

export const recycleState = atom({
	key: 'recycle',
	default: false,
});
