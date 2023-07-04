import { Profit_Criterion } from "./Profit_criterion/Profit_criterion";
function Profit_summary() {
  return (
    <div className=" flex flex-wrap items-center gap-6">
      <Profit_Criterion title={"Revanu"} price={"$2,415"} profit={"-11.4"} />
      <Profit_Criterion title={"Sales"} price={"$4,415"} profit={"-1.4"} />
      <Profit_Criterion title={"Cost"} price={"$2,225"} profit={"+2.4"} />
    </div>
  );
}
export { Profit_summary };
