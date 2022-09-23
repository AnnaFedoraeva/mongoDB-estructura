db.createCollection('Clientes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Clientes',
      required: ['Nombre', 'Contacto', 'Fecha_registro'],
      properties: {
        Nombre: {
          bsonType: 'string'
        },
        Contacto: {
          bsonType: 'array',
          items: {
            title: 'Contacto',
            required: ['Dirección', 'Teléfono', 'Email'],
            properties: {
              Dirección: {
                bsonType: 'object',
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
              },
              Teléfono: {
                bsonType: 'object',
                title: 'Teléfono',
                required: ['Móvil'],
                properties: {
                  Móvil: {
                    bsonType: 'string'
                  },
                  Fax: {
                    bsonType: 'string'
                  }
                }
              },
              Email: {
                bsonType: 'object',
                title: 'Email',
                required: ['Email '],
                properties: {
                  Email: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        },
        Fecha_registro: {
          bsonType: 'date'
        },
        Recomendado_por: {
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
      required: ['Nombre', 'Apellido', 'Contacto'],
      properties: {
        Nombre: {
          bsonType: 'string'
        },
        Apellido: {
          bsonType: 'string'
        },
        Contacto: {
          bsonType: 'array',
          items: {
            title: 'Contacto',
            required: ['Dirección', 'Teléfono', 'Email'],
            properties: {
              Dirección: {
                bsonType: 'object',
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
              },
              Teléfono: {
                bsonType: 'object',
                title: 'Teléfono',
                required: ['Móvil'],
                properties: {
                  Móvil: {
                    bsonType: 'string'
                  },
                  Fax: {
                    bsonType: 'string'
                  }
                }
              },
              Email: {
                bsonType: 'object',
                title: 'Email',
                required: ['Email '],
                properties: {
                  Email: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('Gafas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Gafas',
      required: ['Marca', 'Graduación_izq', 'Graduación_der', 'Tipo_montura', 'Color_montura', 'Color_cristal', 'Precio', 'Proveedor'],
      properties: {
        Marca: {
          bsonType: 'string'
        },
        Graduación_izq: {
          bsonType: 'double'
        },
        Graduación_der: {
          bsonType: 'double'
        },
        Tipo_montura: {
          bsonType: 'string'
        },
        Color_montura: {
          bsonType: 'string'
        },
        Color_cristal: {
          bsonType: 'string'
        },
        Precio: {
          bsonType: 'double'
        },
        Proveedor: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Proveedores', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Proveedores',
      required: ['Nombre', 'Contacto', 'NIF'],
      properties: {
        Nombre: {
          bsonType: 'string'
        },
        Contacto: {
          bsonType: 'array',
          items: {
            title: 'Contacto',
            required: ['Dirección', 'Teléfono', 'Email'],
            properties: {
              Dirección: {
                bsonType: 'object',
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
              },
              Teléfono: {
                bsonType: 'object',
                title: 'Teléfono',
                required: ['Móvil'],
                properties: {
                  Móvil: {
                    bsonType: 'string'
                  },
                  Fax: {
                    bsonType: 'string'
                  }
                }
              },
              Email: {
                bsonType: 'object',
                title: 'Email',
                required: ['Email '],
                properties: {
                  Email: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        },
        NIF: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Ventas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Ventas',
      required: ['Empleado', 'Cliente', 'Gafas'],
      properties: {
        Empleado: {
          bsonType: 'objectId'
        },
        Cliente: {
          bsonType: 'objectId'
        },
        Gafas: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
