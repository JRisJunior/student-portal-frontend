import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <img
          src="https://acltc-blog-pics.s3.amazonaws.com/uploads/blog_pic/blog_pic/24/ActualizeFinalwhiteBgLogo.png"
          alt="logo"
          className="logo"
        />
        <nav>
          <ul>
            <li className="login">
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
