import React, { Component } from 'react';
import CardList from '../components/CardList';
//import robots from './robots'
import { connect } from 'react-redux';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
    //recieve a state
    return{
        searchField: state.searchRobots.searchField,
        //in index.js we create a store as state with searchRobots reduxer
        //reduxer裡的searchRobots
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
//recieve a dispatch which use to send action
    return {
        onSearchChange: (event) => dispatch(
            // dispatch an action 
            setSearchField(event.target.value)
            //event.target.value === 'the word that user typed'
        ),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount = () =>{
        this.props.onRequestRobots();
    }
 //because we create the store
 /*
    onSearchChange = (event) =>{ //去查為什麼要用onSearchChange = (event) =>
        //never do this.state.robots =  'abc'
        this.setState({ searchfield: event.target.value })
    }
*/
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })
        if (isPending) {
            return (
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <h2>Loading...</h2>
                </div>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchBox searchChange={ onSearchChange }/>
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
export default connect( mapStateToProps, mapDispatchToProps )(App);
//high order component
//connect function is a higher function that returns another function
//so connect is going to run the App
//connect give those props(mapStateToProps,mapDispatchToProps) to the Apps