import React, { useState, useEffect } from 'react';

function SideNav(props) {
  const [logInOut, setLogInOut] = useState(null);

  useEffect(() => {
    if (props.isLoggedIn === true) {
      setLogInOut('Logout');
    } else if (props.isLoggedIn === false) {
      setLogInOut('Login')
    }
  })

  return (
    <div className='sidenav'>
      <div className='topBar'>
        <h1>Shared Calendar</h1>
      </div>

      <input type='button' value='+ New Calendar' />
      <input type='button' value='> My Calendars' />

      <div id='login-btn'>{logInOut}</div>
    </div>
  )
}

export default SideNav;