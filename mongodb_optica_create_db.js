Please enter a MongoDB connection string (Default: mongodb://localhost/): 27017

27017> use Optica

db.createCollection ("Clientes")

db.createCollection ("Gafas")

db.createCollection ("Proveedores")

db.createCollection ("Empleados")

db.Empleados.insertOne({"nombre": "Alan Rickman"})

db.Proveedores.insert({"nombre": "Sunshine", "direccion": "Calle Valencia 63, Barcelona", "telefono": 45423957, "fax": 84574857, "NIF": "B675345859"})

var idSunshine = ObjectId("6326f3c5b27aef8dccd69ae8")

db.Gafas.insert({"id_Proveedor": idSunshine, "marca": "Rainbow", "graduacion_izq": 2, "graduacion_der": 1, "tipo_montura": "metalica", "color_montura": "negro", "color_cristal": "negro", "precio": 230})

var idAlan = ObjectId("6326f343b27aef8dccd69ae7")

var idGafasRainbow = ObjectId("6326f55ab27aef8dccd69ae9")

db.Clientes.insert({"nombre": "Jordi Lopez", "direccion": "Calle Mallorca 79, Barcelona", "email": "jlopez@gmail.com", "fecha de registro": "12.07.2022", "recomendado por": "0", "id_empleado": idAlan, "id_gafas": idGafasRainbow})









