const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame")
exports.goStudent = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/student/student")
}
exports.exitApp = () => {
    console.log('exitApp')
    android.os.Process.killProcess(android.os.Process.myPid())
}