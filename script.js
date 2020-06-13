const totalRooms = {};

const startButton = document.createElement("button");
startButton.value = "start";
startButton.innerHTML = "start";
startButton.className = "startButton";
document.querySelector(".container").appendChild(startButton);
const outputMsgElement = document.querySelector(".output");

// ------------------------------ Msgs----------------------//

const hallMsg =
  " You are in the hall of this hunted house, choose the room to which you want to go:";
const kitchenMsg =
  "You are in the kitchen, there is a dead body in the floor, click it to find clues";

const livingroomMsg = "There are a lot of things here, click to find the clue";
const bathroomMsg = "what is the secret word";

//-------------------Function---------------------//

const startGame = (e) => {
  outputMsgElement.innerHTML = `${hallMsg}`;
  const kitchen = new Room("kitchen", kitchenMsg);
  const livingroom = new Room("livingroom", livingroomMsg);
  const bathroom = new Room("bathroom", bathroomMsg);

  totalRooms["kitchen"] = kitchen;
  totalRooms["livingroom"] = livingroom;
  totalRooms["bathroom"] = bathroom;

  console.log(totalRooms);

  document.querySelector(".startButton").remove();
};

//------------------Event Listener----------------//

startButton.addEventListener("click", startGame);

//----------------------------Constructor-------------------//

class Room {
  constructor(roomId, msg) {
    this.roomId = roomId;
    this.roomValue = roomId;
    this.labelText = roomId;
    this.msg = msg;

    this.roomElement = document.createElement("input");
    this.roomLabelElement = document.createElement("label");
    this.roomElement.name = this.roomId;
    this.roomElement.type = "radio";
    this.roomElement.id = `${this.roomId}`;
    this.roomElement.value = `${this.roomValue}`;
    this.roomLabelElement.innerText = `${this.labelText}`;
    document.querySelector(".container").appendChild(this.roomElement);
    document.querySelector(".container").appendChild(this.roomLabelElement);
    this.roomElement.addEventListener("onchange", this.chooseRoom);
  }
  chooseRoom() {
    outputMsgElement.innerHTML = `${this.msg}`;
    console.log("hello");
  }
}
