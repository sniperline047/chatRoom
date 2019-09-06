import React from 'react';
import io from 'socket.io-client';

export const ChatContext = React.createContext();  

const initState = {
	Finance: [
	],
	Agriculture: [
	],
	Health: [
	],
	Cooperation: [
	],
	Education: [
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

let socket;

function sendChatAction(value) {
	socket.emit('chat message', value);
}

export default function Store(props) {

	const [allChats, dispatch] = React.useReducer(reducer, initState);

	const user = 'DepartmentID:' + Math.random(100).toFixed(2);

	if(!socket) {
		socket = io(':3001')
	    socket.on('chat message', function(msg){
        	dispatch({type:'RECEIVE_MESSAGE' ,payload: msg})
	    });
	}


	return (
		<ChatContext.Provider value={{allChats, sendChatAction, user}}>
			{props.children}
		</ChatContext.Provider>
	)
}