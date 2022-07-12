import React from 'react';
import SideNav from './SideNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SideNav isLoggedIn={false}/>
        <div className='main'>
          <div className='topBar' id='topBar-calName'>
            <h1>Calendar Name</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App;