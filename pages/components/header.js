import { useRouter } from 'next/router';

const Header = (props) => {
  const router = useRouter();
  const route = (string) => {
    router.push(`${string}`);
  }

  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo-container" onClick={(e) => {route(`/`)}}>
          <div className="logo">
            <span className="l1">Steve</span>
            <span className="l2">Loves</span>
            <span className="l3">Cartoons</span>
          </div>
        </div>
        <ul className="header-list">
            <a><li onClick={(e) => {route(`/`)}}>Home</li></a>
            <a><li onClick={(e) => {route(`/`)}}>Shows</li></a>
            <a><li onClick={(e) => {route(`/`)}}>About</li></a>
            {/* <a> <li><input type="text" placeholder="search"></input></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header;