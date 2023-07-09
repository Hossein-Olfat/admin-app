function Button(status) {
  if (status === "Declined") {
    return "text-[#d95087] bg-[#fff0f1]";
  } else if (status === "Pending") {
    return "text-[#2a7ade] bg-[#ebf1fe]";
  } else if (status === "Approved") {
    return "bg-[#e5faf2] text-[#3bb077]";
  } else {
    return "";
  }
}
export { Button };
