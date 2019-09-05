import React from 'react';

export const ChatContext = React.createContext();  

const initState = {
	Finance: [
		{from: 'sniper', msg: 'hello'},
		{from: 'no_one', msg: 'hello'},
		{from: 'maverick', msg: 'hello'},
	],
	Agriculture: [
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
	],
	Health: [
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
	],
	Cooperation: [
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
	],
	Education: [
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
		{from: 'sniper', msg: 'hello'},
	],

}

function reducer(state,action) {
	const {from, msg, dept} = action.payload;
	switch(action.type) {
		case 'RECEIVE_MESSAGE':
			return {
				...state,
				[dept]: [
					...state[dept],
					{from, msg}
				]
			}
		default:
			return state
	}
}

export default function Store(props) {

	const reducerHook = React.useReducer(reducer, initState);

	return (
		<ChatContext.Provider value={reducerHook}>
			{props.children}
		</ChatContext.Provider>
	)
}