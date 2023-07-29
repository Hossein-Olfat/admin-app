function Pagination_datas(datas, page_number, setpage_number) {
  const each_slide = datas.slice(0 + page_number * 4, 4 + page_number * 4);
  const start_slide = page_number * 4 + 1;
  const numberofpages =
    Math.floor(datas.length / 4) + (datas.length % 4 === 0 ? 0 : 1) - 1;

  if (each_slide.length === 0) {
    if (page_number === 0) {
      console.log("there is no user");
    } else {
      setpage_number((prev) => {
        return prev - 1;
      });
    }
  }
  return [each_slide, start_slide, numberofpages];
}
export { Pagination_datas };
