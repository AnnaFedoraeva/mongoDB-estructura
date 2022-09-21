db.createCollection('Clientes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Clientes',
      required: ['nombre', 'apellido', 'contacto', 'provincia', 'localidad'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        apellido: {
          bsonType: 'string'
        },
        contacto: {
          bsonType: 'array',
          items: {
            title: 'Contacto',
            properties: {
              Dirección: {
                bsonType: 'array',
                items: {
                  title: 'Dirección',
                  required: ['Calle', 'Ciudad', 'CP', 'País'],
                  properties: {
                    Calle: {
                      bsonType: 'string'
                    },
                    Ciudad: {
                      bsonType: 'string'
                    },
                    CP: {
                      bsonType: 'string'
                    },
                    País: {
                      bsonType: 'string'
                    }
                  }
                }
              },
              Teléfono: {
                bsonType: 'array',
                items: {
                  title: 'Telefono',
                  required: ['Mobil'],
                  properties: {
                    Mobil: {
                      bsonType: 'string'
                    }
                  }
                }
              }
            }
          }
        },
        provincia: {
          bsonType: 'objectId'
        },
        localidad: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Provincias', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Provincias',
      required: ['nombre'],
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Localidades', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Localidades',
      required: ['nombre', 'provincia'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        provincia: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Tiendas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Tiendas',
      required: ['provincia', 'localidad'],
      properties: {
        Dirección: {
          bsonType: 'array',
          items: {
            title: 'Dirección',
            required: ['Calle', 'Ciudad', 'CP', 'País'],
            properties: {
              Calle: {
                bsonType: 'string'
              },
              Ciudad: {
                bsonType: 'string'
              },
              CP: {
                bsonType: 'string'
              },
              País: {
                bsonType: 'string'
              }
            }
          }
        },
        provincia: {
          bsonType: 'objectId'
        },
        localidad: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Empleados', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Empleados',
      required: ['nombre', 'apellido', 'NIF', 'tienda'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        apellido: {
          bsonType: 'string'
        },
        NIF: {
          bsonType: 'string'
        },
        Teléfono: {
          bsonType: 'array',
          items: {
            title: 'Telefono',
            required: ['Mobil'],
            properties: {
              Mobil: {
                bsonType: 'string'
              }
            }
          }
        },
        ocupación: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        tienda: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Pizzas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Pizzas',
      required: ['nombre'],
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Productos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Productos',
      required: ['nombre', 'descripión', 'recio', 'pizza'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        descripión: {
          bsonType: 'string'
        },
        recio: {
          bsonType: 'double'
        },
        pizza: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Pedidos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Pedidos',
      required: ['fecha_hora_pedido', 'fecha_hora_entrega', 'tipo_entrega', 'cantidad_de_productos', 'precio', 'producto', 'cliente', 'empleado', 'tienda'],
      properties: {
        fecha_hora_pedido: {
          bsonType: 'date'
        },
        fecha_hora_entrega: {
          bsonType: 'date'
        },
        tipo_entrega: {
          bsonType: 'string'
        },
        cantidad_de_productos: {
          bsonType: 'int'
        },
        precio: {
          bsonType: 'double'
        },
        producto: {
          bsonType: 'objectId'
        },
        cliente: {
          bsonType: 'objectId'
        },
        empleado: {
          bsonType: 'objectId'
        },
        tienda: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

