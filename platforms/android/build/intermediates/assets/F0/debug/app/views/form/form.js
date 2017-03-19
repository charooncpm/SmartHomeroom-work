const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame")
exports.goStudent = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/student/student")
}
exports.takePhoto = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/photo/photo")
}