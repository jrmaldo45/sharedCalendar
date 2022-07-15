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

      <input type='button' value='+ New Calendar' />
      <div>
        <button {...getToggleProps()}>
          > My Calendars
        </button>
        <section {...getCollapseProps()}>Collapsed content</section>
      </div>
      {/* <input type='button' value='> My Calendars' /> */}

      <div id='login-btn'>{logInOut}</div>
    </div>
  )
}

export default SideNav;