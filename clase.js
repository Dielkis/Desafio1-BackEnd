

class ProductManager {
    constructor() {
        this.productos = []
    }

    addProduct(title, description, price, thumbnail, stock) {
        let nuevoProducto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            stock: stock
        }

        if (this.productos.length === 0) {
            nuevoProducto.code = 1
        } else {
            nuevoProducto.code = this.productos[this.productos.length - 1].code + 1
        }

        this.productos.push(nuevoProducto)
    }

    getProducts() {

        return this.productos;

    }

    getProductsById(codeProducto) {

        let indiceProducto = this.productos.findIndex(producto => producto.code === codeProducto)


        if (indiceProducto === -1) {
            console.log(`El Producto ${codeProducto} no existe`)

        }
        return this.productos[indiceProducto]
    }
}

let pm = new ProductManager();

pm.addProduct("Monitor", "Monitor Gamer UltraGear™ 23.8in FHD IPS", 400, "sin imagen", 25)
pm.addProduct("Teclado", "Teclado Gamer UltraGear™", 59, "sin imagen", 10)
pm.addProduct("Mouse", "Moouse Gamer UltraGear™", 60, "sin imagen", 15)
pm.addProduct("Case", "Case Gamer UltraGear™", 250, "sin imagen", 8)

console.log(pm.getProducts())



