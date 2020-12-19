class snakeApp {
  constructor (speed) {
    this.speed = speed
    this.con = new controller()
  }
  init() {
    this.con.gameStart()
    this.con.updateDataModel(this.speed)
  }
}

class keyboardListener {

  constructor() {
    this.event = {
      eventCode: null
    }
  }

  // 监听dom并返回event对象
  domListener() {
    let obj = this

    // 只要按下什么按键就抛出什么事件    
    window.addEventListener("keydown", function (event) {
      let e = window.event || event
      // console.log(e.keyCode)
      obj.event.eventCode = e.keyCode
      // console.log(this.event)
    })
  }

  // 把event对象发给controller以通知数据模型更新
  getEvent() {
    // console.log(this.event)
    
    return this.event
  }
}