const bgBody = document.querySelector("html")
const menus = document.querySelectorAll(".menu-item")
const hoverOne = document.querySelector(" #hoverOne")
const hoverTwo = document.querySelector(" #hoverTwo")
const hoverThree = document.querySelector(" #hoverThree")

export class Eventos {
    hoverOne() {
/*         menu.addEventListener("click",  (event) => {
          hover.classList.remove("active")
            event.target.classList.add("active") 
            console.log("entrou", event.target)
        }) */

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
        menus.forEach(menu => {
            menu.addEventListener("click", function() {
                menus.forEach(item => {
                    item.classList.remove("active")
                } ) 
                this.classList.add("active")
            })
        })
    }


}