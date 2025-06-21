const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
]
function superbowlWin(array) {
    let newResult=array.find(array => array.result === "W");
    return newResult
}
console.log(superbowlWin(record)); // { year: "2015", result: "W" }