class snake {
  constructor(defuatLength, x, y) {
    // 通过数组储存蛇节点对象
    this.lastNode = null
    this.x = x
    this.y = y
    this.nodeList = [{
      x: this.x,
      y: this.y
    }]
    this.head = this.nodeList[0]
    this.nodeLength = 0

    this.defuatLength = defuatLength
  }

  // 定义创建蛇对象的方法
  bron() {
    for (let i = 0; i < this.defuatLength; i++) {
      this.appendNode(this.x + i + 1, this.y)
    }
  }

  // 定义添加节点的方法
  appendNode(x, y) {
    this.nodeList.push({
      x: x,
      y: y
    })
    this.nodeLength++
  }
}