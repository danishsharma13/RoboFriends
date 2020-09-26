import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className = "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="fuck you"></img>
			<h3> {name}</h3>
			<h4> {email}</h4>
		</div>
	);
}

export default Card;
