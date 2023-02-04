const bgBody = document.querySelector("html")
const hoverOne = document.querySelector(" #hoverOne")
const hoverTwo = document.querySelector(" #hoverTwo")
const hoverThree = document.querySelector(" #hoverThree")
 
export class Eventos {
    hoverOne() {
        hoverOne.addEventListener("click",  () => {
            hoverOne.classList.add("active")
            hoverTwo.classList.remove("active")
            hoverThree.classList.remove("active")
            bgBody.classList.remove("universe")
            bgBody.classList.remove("exploration")
        
        })
    }

    hoverTwo(){
    hoverTwo.addEventListener("click", () => {
        hoverTwo.classList.add("active")
        hoverOne.classList.remove("active")
        hoverThree.classList.remove("active")
        bgBody.classList.add("universe")
        bgBody.classList.remove("exploration")

    })
    }

    hoverThree() {
        hoverThree.addEventListener("click", () => {
            hoverThree.classList.add("active")
            hoverOne.classList.remove("active")
            hoverTwo.classList.remove("active")
            bgBody.classList.add("exploration")
            bgBody.classList.add("universe")
        
        } )
    }

    backgroundChange() {
        this.hoverOne()
        this.hoverTwo()
        this.hoverThree()
    }

}