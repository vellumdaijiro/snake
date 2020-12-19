class grid {
  constructor(maxHeight, maxWidth, snake, food) {
    // 用二维数组存地图
    let array = []
    // 定义 高:maxHeight, 长:maxWidth 的 二维数组
    for (let i = 0; i < maxHeight; i++) {
      let temp = []
      for (let j = 0; j < maxWidth; j++) {
        temp.push(0)
      }      
      array.push(temp)
    }
    this.maxWidth = maxWidth
    this.maxHeight = maxHeight
    this.snake = snake
    this.map = array
    this.food = food
    this.snake.bron()
  }
  reloadData() {
    
    // 把储存地图的二维数组中蛇的部分赋值为1    
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (i == this.food.y && j == this.food.x) {
          this.map[i][j] = -1
        }
        for (let k = 0; k < this.snake.nodeLength; k++) {
          let x = this.snake.nodeList[k].x
          let y = this.snake.nodeList[k].y
          if (i == y && j == x) {
            this.map[i][j] = 1
          }
          if (i == this.snake.head.y && j == this.snake.head.x) {
            this.map[i][j] = 2
          }
        }
      }
    }
    this.snakeEatFood()
  }

  // 操作地图上的蛇
  moveSnake(directron) {
    let cache = this.snake.head
    let obj = this
    function moveNode() {
      
      let temp1 = obj.snake.nodeList[obj.snake.nodeList.length - 1]
      let temp2 = obj.snake.nodeList[0]
      obj.snake.nodeList.pop()
      temp1.x = cache.x
      temp1.y = cache.y
      obj.snake.nodeList.shift()
      obj.snake.nodeList.unshift(temp1)
      obj.snake.nodeList.unshift(temp2)
      console.log(obj.snake.nodeList)
    }
    function clearMap() {
      obj.map[obj.snake.head.y][obj.snake.head.x] = 0
      for (let i = 0; i < obj.snake.nodeList.length; i++) {
        obj.map[obj.snake.nodeList[i].y][obj.snake.nodeList[i].x] = 0
      }
    }

    for (let i = 1; i < this.snake.nodeList.length; i++) {
      if (this.snake.head.x == this.snake.nodeList[i].x && this.snake.head.y == this.snake.nodeList[i].y) {
        return true
      }
    }

    if (this.snake.head.x != this.maxWidth && 
      this.snake.head.y != this.maxHeight && 
      this.snake.head.x != 0 && 
      this.snake.head.y != 0) {
      if (directron == "up" && directron != "down") {
        moveNode() 
        clearMap()
        this.snake.head.y -= 1
  
      }else if(directron == "down" && directron != "up") {
        moveNode() 
        clearMap()
        this.snake.head.y += 1
        
      }else if(directron == "left" && directron != "right") {
        moveNode() 
        clearMap()
        this.snake.head.x -= 1
        
      }else if(directron == "right" && directron != "left") {
        moveNode() 
        clearMap()
        this.snake.head.x += 1
      }
      return true
    }
  }

  snakeEatFood() {
    // console.log("snake:"+this.snake.head+"food:"+this.food ,this.snake.head == this.food)
    if (this.snake.head.x == this.food.x && this.snake.head.y == this.food.y) {
      
      this.food = new food(Math.floor(Math.random()*this.maxWidth), Math.floor(Math.random()*this.maxHeight))
      console.log(Math.floor(Math.random()*this.maxWidth))
      
      console.log(this.food)
      
      this.snake.appendNode(1,1)
    }
  }

}