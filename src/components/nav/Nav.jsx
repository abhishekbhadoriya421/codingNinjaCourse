import style from "./Nav.module.css";
import { Outlet,NavLink, Link } from "react-router-dom";
function Nav() {
 
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to={'/'}>
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />
            </Link>
            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>
            <button>
              <NavLink to={'/courses'}>
                {({isActive}) => (isActive ? "OnCourses":"Courses")}
              </NavLink> 
            </button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Nav;
