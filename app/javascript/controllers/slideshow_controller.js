import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showSlide(0)
    this.targetLength = this.slideTargets.length;
  }
  
  next() {
    this.showSlide(this.index + 1)
  }

  previous() {
    this.showSlide(this.index - 1)
  }

  showSlide(index) {
    if(index < this.slideTargets.length && index > -1) {
      this.index = index
      this.slideTargets.forEach((el, i) => {
        el.classList.toggle("slide--current", index == i)
      })
    }
  }


  timer() {
    this.timerCall = setInterval(this.interval.bind(this), 1000);
  }

  interval() {
    if(this.index < this.slideTargets.length) {
      this.next()
      if(this.index === this.slideTargets.length - 1) {
        clearInterval(this.timerCall)
      }
    }
  }

}