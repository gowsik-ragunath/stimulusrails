import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "showContent", "editContent", "toggleLink" ]

  connect() {
    if(this.hasShowContentTarget && this.hasEditContentTarget) {
      this.editContentTarget.classList.add("hide");
    }
  }

  toggleContent() {
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