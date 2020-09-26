import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>response.json())
		.then(users => {this.setState({ robots: users })});
		
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const { robots, searchfield} = this.state;
		const filterRobo = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		if (!robots.length) {
			return <h1 className="tc"> Loading </h1>
		}else{
			return (
				<div className="tc">
					<h1 className="f1"> RoboFriends </h1>
					<SearchBox SearchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={ filterRobo } />
						</ErrorBoundry>
					</Scroll>
				</div>
			)
		}
	}
};

export default App;