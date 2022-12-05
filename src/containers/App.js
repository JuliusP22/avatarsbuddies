import React from 'react';
import CardList from '../components/CardList';
import { avatars } from '../components/avatars';
import Searchbox from '../components/Searchbox';
// import { render } from '@testing-library/react';
import './App.css';
import Scroll from '../components/Scroll';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            avatars: [], //avatars,
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/user').then(response => {
        //     response.json();
        // }).then(user => {
        //     this.setState({ avatars: user})
        // });        
        this.setState({ avatars: avatars });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // const filterAvatars = this.state.avatars.filter(avatar => {
        //     return avatar.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filterAvatars);
    }

    render() {
        const { avatars, searchfield } = this.state;

        const filterAvatars = avatars.filter(avatar => {
            return avatar.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
            return (
                <div className='tc'>
                    <h1 className='f1'>AvatarsBuddies</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList avatars = { filterAvatars } />
                    </Scroll>
                </div>
            );    
    }
}

export default App;