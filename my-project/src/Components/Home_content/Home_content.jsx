import { Profit_summary } from "./Profit_summary/Profit_summary.jsx";
import Chart from "../Chart/Chart";
import { xAxisdata } from "../../Chart_datas";
import { Widget } from "./Widget/Widget.jsx";
function Home_Content() {
  return (
    <div className=" flex flex-col">
      <Profit_summary />
      <Chart grid title="Month Sale" data={xAxisdata} datakey="Sale" />
      <Widget />
    </div>
  );
}

export { Home_Content };
