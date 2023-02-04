import { Router } from "./router.js"
import { Eventos } from "./utils.js"

const eventos = new Eventos()

const routes = new Router()

routes.add('/home', '/pages/home.html')
routes.add('/universe', '/pages/universe.html')
routes.add('/exploration', '/pages/exploration.html')

eventos.backgroundChange()



routes.handle()




window.onpopstate = () => routes.handle()
window.route = () => routes.route()

