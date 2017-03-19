const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame")
exports.goBack = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/home/home")
}
exports.goForm = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/form/form")
}