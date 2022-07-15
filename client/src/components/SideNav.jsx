import React, { useState, useEffect } from 'react';
import useCollapse from 'react-collapsed';

function SideNav(props) {
  const [logInOut, setLogInOut] = useState(null);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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

      <div>
        <input type='button' className='btn nav-btn' value='+ New Calendar' />
      </div>
      <div>
        <input className='btn nav-btn dropDown' type='button' value='> My Calendars' {...getToggleProps()} />
        <section {...getCollapseProps()}>
          <input type='button' className='btn nav-btn dropDown-content' value='Collapsed content' />
          <input type='button' className='btn nav-btn dropDown-content' value='Collapsed content' />
          <input type='button' className='btn nav-btn dropDown-content' value='Collapsed content' />
        </section>
      </div>

      <div id='login-btn'>{logInOut}</div>
    </div>
  )
}

export default SideNav;