import { Link } from "react-router-dom"

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
