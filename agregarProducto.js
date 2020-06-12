function agregarProducto() {
    let body = document.getElementsByTagName("body")[0]
    let tabla = document.getElementById("tabla")
    let tblBody = document.getElementById("cuerpoTabla")
    let codigo = document.getElementById("codigo")
    let cant = document.getElementById("cantidad")
    let total = 0
    productos.map(producto => {
        let row = document.createElement("tr")
        let img = document.createElement("td")
        let descripcion = document.createElement("td")
        let precio = document.createElement("td")
        let cantidad = document.createElement("td")
        let monto = document.createElement("td")

        if (codigo.value == producto.id) {
            img.innerHTML = "<img src=" + productos[codigo.value-1].img + ">"
            descripcion.appendChild(document.createTextNode(producto.desc))
            precio.appendChild(document.createTextNode(producto.precio))
            cantidad.appendChild(document.createTextNode(cant.value))
            monto.appendChild(document.createTextNode(cant.value*parseInt(producto.precio,10)))
            total+=cant.value*parseInt(producto.precio,10)
            console.log(cant.value)
            console.log(parseInt(producto.precio,10))
            row.appendChild(img)
            row.appendChild(descripcion)
            row.appendChild(precio)
            row.appendChild(cantidad)
            row.appendChild(monto)
            tblBody.appendChild(row)
        }
    })
    tabla.appendChild(tblBody)
    body.appendChild(tabla)
    tabla.setAttribute("border", "")
}


let productos = [
    {
        id: 1,
        desc: 'Azúcar Iansa Rubia 500g',
        precio: '1000',
        img: 'img/Productos/Azucar_Iansa_Rubia_500g.jpg'
    },
    {
        id: 2,
        desc: 'Café Nescafé Dolca 50g',
        precio: " 1000",
        img: 'img/Productos/Café_Nescafé_Dolca_50g.jpg'
    },
    {
        id: 3,
        desc: 'Crema Nestlé variedades 157g',
        precio: " 1000",
        img: 'img/Productos/Crema_Nestlé_variedades_157g.jpg'
    },
    {
        id: 4,
        desc: 'Galletas Mckay Criollitas champaña 150g',
        precio: " 1000",
        img: 'img/Productos/Galletas_Mckay_Criollitas_champaña_150g.jpg'
    },
    {
        id: 5,
        desc: 'Pack Chocman 8 unid.',
        precio: " 1000",
        img: 'img/Productos/Pack_Chocman_8_unid..jpg'
    },
    {
        id: 6,
        desc: 'Palmitos en trozos Máxima 250g drenados',
        precio: " 1000",
        img: 'img/Productos/Palmitos_en_trozos_Máxima_250g_drenados.jpg'
    },
    {
        id: 7,
        desc: 'Papel higiénico Elite doble hoja 30m 16 unid.',
        precio: " 1000",
        img: 'img/Productos/Papel_higiénico_Elite_doble_hoja_30m_16_unid..jpg'
    },
    {
        id: 8,
        desc: 'Saborizante de leche Cola Cao chocolate 180g',
        precio: " 1000",
        img: 'img/Productos/Saborizante_de_leche_Cola_Cao_chocolate_180g.jpg'
    },
    {
        id: 9,
        desc: 'Toalla Nova clásica gigante 80m',
        precio: " 1000",
        img: 'img/Productos/Toalla_Nova_clásica_gigante_80m.jpg'
    },
    {
        id: 10,
        desc: 'Torta Chocolate Santa Isabel',
        precio: " 1000",
        img: 'img/Productos/Torta_Chocolate_Santa_Isabel.jpg'
    }]