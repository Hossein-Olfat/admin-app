function Spinner() {
  return (
    <div className=" w-full h-full flex justify-center flex-col items-center gap-4">
      <div className="w-10 h-10 animate-spin rounded-[50%] border-t-2 border-solid border-[#1e1e87]"></div>
      <div>Loading ...</div>
    </div>
  );
}
export { Spinner };
