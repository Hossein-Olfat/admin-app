import { Profit_summary } from "./Profit_summary/Profit_summary.jsx";
import Chart from "../Chart/Chart";
import { xAxisdata } from "../../Chart_datas";
function Home_Content() {
  return (
    <div className=" flex flex-col">
      <Profit_summary />
      <Chart grid title="Month Sale" data={xAxisdata} datakey="Sale" />
    </div>
  );
}

export { Home_Content };
