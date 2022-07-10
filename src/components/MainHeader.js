import { NavLink, Outlet } from "react-router-dom"

import classes from "./MainHeader.module.css"

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}

export default MainHeader
