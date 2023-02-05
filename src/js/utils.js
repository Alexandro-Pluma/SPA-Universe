const bgBody = document.querySelector("html")
const menus = document.querySelectorAll(".menu-item")
const hoverTwo = document.querySelector(" #hoverTwo")
const hoverThree = document.querySelector(" #hoverThree")

export class Eventos {

    hoverTwo(){
    hoverTwo.addEventListener("click", () => {
        bgBody.classList.add("universe")
        bgBody.classList.remove("exploration")

    })
    }

    hoverThree() {
        hoverThree.addEventListener("click", () => {
            bgBody.classList.add("exploration")
            bgBody.classList.add("universe")
        
        } )
    }

    backgroundChange() {
        this.hoverTwo()
        this.hoverThree()
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