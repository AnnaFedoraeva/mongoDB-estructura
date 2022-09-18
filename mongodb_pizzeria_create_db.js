
Please enter a MongoDB connection string (Default: mongodb://localhost/): 27017

27017> use Pizzeria

db.createCollection ("Provincia")

db.createCollection ("Localidad")

db.createCollection ("Pedidos")

db.createCollection ("Tiendas")

db.createCollection ("Clientes")

db.createCollection ("Pizzas")

db.createCollection ("Productos")

db.createCollection ("Empleados")

db.Provincia.insertOne({"nombre": "Barcelona"})

var idBarcelona = ObjectId("631b2b21a6bc585dce9af221")

db.Localidad.insert([{"id_Provincia": idBarcelona, "Localidad": "Barcelona"}])

db.Localidad.insert([{"id_Provincia": idGerona, "Localidad": "Gerona"}])

db.Localidad.insert([{"id_Provincia": idGerona, "Localidad": "Blanes"}])

var idBarcelonaL = ObjectId("6326367d58ea3a4136105c8a")

var idGeronaL = ObjectId("632636ae58ea3a4136105c8b")

db.Tiendas.insert({"direccion": "Av Madrid, 45", "CP": 08028, "id_Provincia": idBarcelona, "Provincia": "Barcelona", "id_Localidad": idBarcelonaL, "Localidad": "Barcelona"})

var idTiendaBCN = ObjectId("632637a458ea3a4136105c8d");

db.Empleados.insert({"nombre": "Clara", "apellido": "Gomez", "NIF": "46973254S", "telefono": "65927458", "ocupacion": "repartidor", "id_Tienda": idTiendaBCN, "Tienda": "Av Madrid 45"})

db.Clientes.insert({"nombre": "Jordi", "apellido": "Lopez", "direccion": "Calle Vallespir 81", "CP": 08014, "telefono": 69931524, "id_Provincia": idBarcelona, "id_Localidad": idBarcelonaL})

db.Clientes.insert({"nombre": "Alberto", "apellido": "Coso", "direccion": "Calle Barcelona 17", "CP": 17002, "telefono": 694346564, "id_Provincia": idGerona, "id_Localidad": idGeronaL})

db.Pizzas.insertOne ({"nombre": "Margarita"})

var idMargarita = ObjectId("63263aa158ea3a4136105c91");

db.Productos.insert({"nombre": "Margarita", "descripcion": "es una típica pizza napolitana elaborada con tomate, mozzarella (tradicionalmente se usa el Fior di latte), albahaca fresca, sal y aceite", "precio": 12, "id_categoria_pizza": idMargarita, "Pizza": "Margarita"})

db.Pedidos.insert({"id_cliente": idCliente1, "fecha_hora_pedido": "12.07.2022, 12:03", "fecha_hora_entrega": "12.07.2022, 14:05", "tipo_de_entrega": "a domicilio", "cantidad_productos": 1, "id_producto": idProducto1, "id_tienda": idTiendaBCN, "precio": 14, "id_repartidor": idRepartidor1})
