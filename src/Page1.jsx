import { Link } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>This is Page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
