import { data } from "../../helper/data";
import "./Main.scss";

import Card from "./Card";

const Main = () => {
  return (
    <div className="main">
      {data.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default Main;
