import "./notfound.scss";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Notfound;
