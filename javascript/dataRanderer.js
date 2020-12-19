class dataRanderer {
  constructor(data, gameWindow) {
    this.data = data
    this.gameWindow = gameWindow
  }

  init() {
    console.log(document.querySelector(this.gameWindow))
    
    for (let i = 0; i < this.data.map.length; i++) {
      let row = document.createElement("ul")
      for (let j = 0; j < this.data.map[i].length; j++) {
        let unit = document.createElement("li")
        unit.className = "unit"
        unit.id = "unitY"+i.toString()+"X"+j.toString()
        row.appendChild(unit)
      }
      document.querySelector(this.gameWindow).appendChild(row)
    }
  }

  update() {
    for (let i = 0; i < this.data.map.length; i++) {
      for (let j = 0; j < this.data.map[i].length; j++) {
        if (this.data.map[i][j] == 2) {
          document.querySelector("#unitY"+i.toString()+"X"+j.toString()).className = "unit " + "head"
        }
        if (this.data.map[i][j] == 1) {
          document.querySelector("#unitY"+i.toString()+"X"+j.toString()).className = "unit " + "snake"
        }
        if (this.data.map[i][j] == -1) {
          document.querySelector("#unitY"+i.toString()+"X"+j.toString()).className = "unit " + "food"
        }
        if (this.data.map[i][j] == 0) {
          document.querySelector("#unitY"+i.toString()+"X"+j.toString()).className = "unit"
        }
      }
    }
  }
}