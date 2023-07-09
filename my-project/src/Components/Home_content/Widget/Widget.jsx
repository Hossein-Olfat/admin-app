import { Widgetlg } from "./Widgetlg/Widgetlg";
import { Widgetsm } from "./Widgetsm/Widgetsm";

function Widget() {
  return (
    <div className=" flex w-full flex-wrap gap-6 mt-6">
      <div className="shadow flex-grow-[1] py-3 px-6">
        <Widgetsm />
      </div>
      <div className="shadow flex-grow-[2] py-3 overflow-x-auto">
        <Widgetlg />
      </div>
    </div>
  );
}
export { Widget };
