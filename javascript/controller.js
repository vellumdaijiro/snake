class controller {

  constructor() {
    this.keyEvent = new keyboardListener()
    this.keyEvent.domListener()
    this.snake = new snake(10, 1, 1)
    // this.food = new food(Math.floor(Math.random()*50, Math.floor(Math.random()*50)))
    this.food = new food(10, 10)
    this.map = new grid(50, 50, this.snake, this.food)
    this.dataRanderer = new dataRanderer(this.map, "#gameWindow")
  }
  // 监听event对象
  eventListener(callback) {
    let event = this.keyEvent.getEvent()
    
    if (callback) {
      event = callback(event) || event
    }
    return event
  }

  // 用于更新数据模型
  updateDataModel(speed) {
    this.dataRanderer.init()
    let obj = this
    this.timer = setInterval(function () {
      
      let gameOver
      if (gameOver) {

      }else {
        let event = obj.eventListener(function (e) {
          if (e.eventCode == 87) {
            e.eventCode = "up"
          }else if(e.eventCode == 83) {
            e.eventCode = "down"
          }else if(e.eventCode == 65) {
            e.eventCode = "left"
          }else if(e.eventCode == 68) {
            e.eventCode = "right"
          }
        })
        gameOver = obj.map.moveSnake(event.eventCode)
        obj.map.reloadData()
        obj.updateUserView()
      }
    }, speed)
    this.map.reloadData()
  }

  // 用于更新图形界面
  updateUserView() {

    this.dataRanderer.update()
  }
  
  gameOver() {

  }

  // 调用 grid开始游戏
  // 定义游戏开始的方法
  gameStart() {
    this.map.reloadData(this.snake)
    // console.log(this.snake, map)

    this.Debug = {
      snake: this.snake,
      listener: this.listener,
      append() {
        this.snake.appendNode(1, 1)
      },
      update() {
        this.map.reloadData(this.snake)
        this.map.update()
      },
      map() {
        return map.map
      }
    }
  }
}