import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "showContent", "editContent", "toggleLink" ]

  initialize() {
    console.log("Element is initialized")
  }

  connect() {
    console.log("Element is connected")
    if(this.hasShowContentTarget && this.hasEditContentTarget) {
      this.editContentTarget.classList.add("hide");
    }
  }
  
  disconnect() {
    console.log("Element is disconnected")
  }

  toggleContent() {
    console.log(this.element)
    // console.log(this.data.get("text"))
    if(this.editContentTarget.classList.contains("hide")) {
      this.editContentTarget.classList.remove("hide");
      this.showContentTarget.classList.add("hide");
      
      this.toggleLinkTarget.innerHTML = "Show"; 
    } else {
      this.showContentTarget.classList.remove("hide");
      this.editContentTarget.classList.add("hide");

      this.toggleLinkTarget.innerHTML = "Edit";
    }
  }
}