import React, { Component } from 'react';
import CardList from '../components/CardList';
//import robots from './robots'
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => this.setState( {robots: users }))
    }

    onSearchChange = (event) =>{ //去查為什麼要用onSearchChange = (event) =>
        //never do this.state.robots =  'abc'
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        if (this.state.robots.length === 0 ) {
            return (
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <h2>Loading...</h2>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots ={ filteredRobots }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }

}
export default App;