export default {
  openapi: "3.0.0",
  info: {
    description:
      "This is a sample e-commerce api.",
    version: "1.0.0",
    title: "Gebeya E-commerce API",
    contact: {
      email: "aewnetu6@gmail.com",
    },
  },
  basePath: "/v2",
  tags: [
    {
      name: "user",
      description: "Everything about User",
    },
    {
      name: "product",
      description: "Everything about Product",
    },
    {
      name: "cart",
      description: "Everything about cart",
    },
  ],
  schemes: ["https", "http"],
  paths: {
    "/users/login": {
      post: {
        summary: "check credential",
        tags: ["user"],
        operationId: "userLogin",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserLogin",
              },
            },
          },
        },
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserLogin",
                },
                examples: {
                  userLoginResponse: {
                    value: {
                        id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzAyMGExYjUwY2MzMWUwNGU0NjgyMyIsImlhdCI6MTYwNjU4MTA1OCwiZXhwIjoxNjA2NTk5MDU4fQ.OgdjjiTq0nYZwTkAjSUbPIwKeubFAK705IMbLboecHA"
                      },
                  },
                },
              },
            },
          },
          401: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError: {
                    value: {
                      message: "Invalid Email or Password"
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/users/register": {
      post: {
        summary: "register a user",
        tags: ["user"],
        operationId: "userRegister",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserRegister",
              },
            },
          },
        },
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserRegister",
                },
                examples: {
                  userResgisterResponse: {
                    value: {
                        id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                      },
                  },
                },
              },
            },
          },
          400: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "User already exists"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Error creating user"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError4: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },
    "/users/update": {
      put: {
        summary: "update current user, all the attributes are optional",
        tags: ["user"],
        operationId: "updateUser",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UserRegister",
              },
            },
          },
        },
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserRegister",
                },
                examples: {
                  updateUserResponse: {
                    value: {
                        id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                        "createdAt": "2020-11-28T19:53:10.524Z",
                        "updatedAt": "2020-11-28T19:53:10.524Z",
                        "__v": 0
                      },
                  },
                },
              },
            },
          },
          400: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "error updating user"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },
    "/users": {
      get: {
        summary: "get all users",
        tags: ["user"],
        operationId: "getUsers",
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserRegister",
                },
                examples: {
                  getUsersResponse: {
                    value: [
                      {
                        _id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                      },
                      {
                        _id: "5fc020a1b50cce6e04e46823",
                        name: "Ronewa rt",
                        email: "ronst43t@gmail.com",
                      }
                    ],
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error retriving users!"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
      security: [
        {
          bearerAuth: [],
        },
      ],
      },
    },
    "/users/:id": {
      get: {
        summary: "get one user",
        tags: ["user"],
        operationId: "getUserById",
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserRegister",
                },
                examples: {
                  getUserByIdResponse: {
                    value: {
                        _id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                      },
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "User not found!"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      delete: {
        summary: "delete a user",
        tags: ["user"],
        operationId: "deleteUser",
        responses: {
          200: {
            description: "User schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/UserRegister",
                },
                examples: {
                  deleteUserResponse: {
                    value: {
                        _id: "5fc020a1b50cc31e04e46823",
                        name: "Ron Stewart",
                        email: "ronstewart@gmail.com",
                      },
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "User not found!"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "error deleting a user!"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError4: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },


    "/products": {
      get: {
        summary: "get all products from the store",
        tags: ["product"],
        operationId: "getProducts",
        responses: {
          200: {
            description: "Product schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Product",
                },
                examples: {
                  getProductsResponse: {
                    value: [
                      {
                        price: 30.0,
                        countInStock: 3,
                        _id: "5fc28302682236394c702b49",
                        vendor: {
                          "_id": "5fc020a1b50cc31e04e46823",
                          "name": "Amanuel Ewnetu"
                        },
                        name: "Ron Stewart",
                        image: "https:cloud.ds/ds/ds.jpg",
                        description: "Description",
                      },
                      {
                        price: 50.0,
                        countInStock: 10,
                        _id: "5fc28302682636394c702b49",
                        vendor: {
                          "_id": "5fc020a1b50cc31e04e46823",
                          "name": "Amanuel Ewnetu"
                        },
                        name: "Ron Stewart",
                        image: "https://picturesite.cm/picture.jpg",
                        description: "Description",
                      },
                    ]
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error retrieving products"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      post: {
        summary: "Add a new product to the store",
        tags: ["product"],
        operationId: "addProduct",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Product",
              },
              examples: {
                Product1: {
                  value: {
                    name: "Ron Stewart",
                    image: "https:cloud.ds/ds/ds.jpg",
                    description: "Description",
                    price: 2,
                    countInStock: 3,
                    "createdAt": "2020-11-28T19:53:10.524Z",
                    "updatedAt": "2020-11-28T19:53:10.524Z",
                    "__v": 0
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Product schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Product",
                },
                examples: {
                  addProductResponse: {
                    value: {
                      price: 2,
                      countInStock: 3,
                      _id: "5fc28302682236394c702b49",
                      vendor: "5fc020a1b50cc31e04e46823",
                      name: "Ron Stewart",
                      image: "https://picturesite.cm/picture.jpg",
                      description: "Description",
                    },
                  },
                },
              },
            },
          },
          400: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error creating product"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },

    "/products/:id": {
      get: {
        summary: "get a single product from store",
        tags: ["product"],
        operationId: "getProductById",
        responses: {
          200: {
            description: "Product schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Product",
                },
                examples: {
                  getProductResponse: {
                    value: {
                        price: 30.0,
                        countInStock: 3,
                        _id: "5fc28302682236394c702b49",
                        vendor: {
                          "_id": "5fc020a1b50cc31e04e46823",
                          "name": "Amanuel Ewnetu"
                        },
                        name: "Air Jordan 1",
                        image: "https://picturesite.cm/picture1.jpg",
                        description: "Description",
                      },
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Product not found"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      delete: {
        summary: "delete product from the store",
        tags: ["product"],
        operationId: "deleteProduct",
        responses: {
          201: {
            description: "Product schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Product",
                },
                examples: {
                  deleteProductResponse: {
                    value: {
                      price: 2,
                      countInStock: 3,
                      _id: "5fc28302682236394c702b49",
                      vendor: "5fc2302682236394c702b49",
                      name: "Air jordan 1",
                      image: "https://picturesite.cm/picture1.jpg",
                      description: "Description",
                      "createdAt": "2020-11-28T21:22:45.626Z",
                      "updatedAt": "2020-11-28T21:22:45.626Z",
                      "__v": 0
                    },
                  },
                },
              },
            },
          },
          403: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error deleting product"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },

    "/carts": {
      post: {
        summary: "add products to a new cart if there's no existing cart by a user or update the cart with new products if a user has one or just update the quantity of a product if a product is already in cart",
        tags: ["cart"],
        operationId: "addToCart",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Cart",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Cart schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Cart",
                },
                examples: {
                  addToCartResponse: {
                    value: {
                      "_id": "5fc2aaa654dfaf001725e1dd",
                      "buyer": "Rob stewart",
                      "products": [
                          {
                              "_id": "5fc2aaa654dfaf001725e1de",
                              "product": {
                                name: "Air Jordan",
                                price: 33.3,
                                countInStock: 55,
                                description: "description",
                                image: "https://picturesite.cm/picture3.jpg"
                              },
                              "quantity": 1
                          },
                      ],
                      "createdAt": "2020-11-28T19:53:10.524Z",
                      "updatedAt": "2020-11-28T19:53:10.524Z",
                      "__v": 0,
                    },
                  },
              },
            },
          },
          400: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "there isn't enough product in stock"
                    },
                   },
                   ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      get: {
        summary: "get all carts",
        tags: ["cart"],
        operationId: "getCarts",
        responses: {
          200: {
            description: "Cart schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Cart",
                },
                examples: {
                  getCartsResponse: {
                    value: [
                      {
                          "id": "5fc0c7c47a5c5a2824b3bdfe",
                          "buyer": "5fc020a1b50cc31e04e46823",
                          "products": [
                              {
                                  "id": "5fc0c7c47a5c5a2824b3bdff",
                                  "product": {
                                      "price": 89.99,
                                      "countInStock": 10,
                                      "_id": "5fc0bbc3653b911ea40ec793",
                                      "vendor": {
                                          "_id": "5fc020a1b50cc31e04e46823",
                                          "name": "Amanuel Ewnetu",
                                          "email": "aewnetu6@gmail.com"
                                      },
                                      "name": "airpods",
                                      "image": "/images/airpods.jpg",
                                      "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working"
                                  },
                                  "quantity": 5,
                                  "subTotalPrice": 155.13
                              },
                              {
                                  "id": "5fc2aa2854dfaf001725e1dc",
                                  "product": {
                                      "price": 100.99,
                                      "countInStock": 55,
                                      "_id": "5fc2a92154dfaf001725e1cf",
                                      "vendor": {
                                          "_id": "5fc020a1b50cc31e04e46823",
                                          "name": "Amanuel Ewnetu",
                                          "email": "aewnetu6@gmail.com"
                                      },
                                      "name": "jdcnskjdskcksd",
                                      "image": "/images/sdjfksdjnfksd.jpg",
                                      "description": "phone allows you to take calls while working"
                                  },
                                  "quantity": 1,
                                  "subTotalPrice": 100.99
                              },
                          ],
                          "totalPrice": 255.32
                      },
                      {
                          "id": "5fc2aaa654dfaf001725e1dd",
                          "buyer": "5fc2a9bb54dfaf001725e1d0",
                          "products": [
                              {
                                  "id": "5fc0c7c47a5c5a2824b3bdff",
                                  "product": {
                                      "price": 89.99,
                                      "countInStock": 10,
                                      "_id": "5fc0bbc3653b911ea40ec793",
                                      "vendor": {
                                          "_id": "5fc020a1b50cc31e04e46823",
                                          "name": "Amanuel Ewnetu",
                                          "email": "aewnetu6@gmail.com"
                                      },
                                      "name": "airpods",
                                      "image": "/images/airpods.jpg",
                                      "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working"
                                  },
                                  "quantity": 86,
                                  "subTotalPrice": 79.13
                              },
                              {
                                  "id": "5fc2a9c954dfaf001725e1d3",
                                  "product": {
                                      "price": 100.99,
                                      "countInStock": 55,
                                      "_id": "5fc2a92154dfaf001725e1cf",
                                      "vendor": {
                                          "_id": "5fc020a1b50cc31e04e46823",
                                          "name": "Amanuel Ewnetu",
                                          "email": "aewnetu6@gmail.com"
                                      },
                                      "name": "jdcnskjdskcksd",
                                      "image": "/images/sdjfksdjnfksd.jpg",
                                      "description": "phone allows you to take calls while working"
                                  },
                                  "quantity": 21,
                                  "subTotalPrice": 20.79
                              },
                          ],
                          "totalPrice": 254.32
                      }
                  ],
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error getting carts"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },

    "/carts/:id": {
      get: {
        summary: "get a single cart",
        tags: ["cart"],
        operationId: "getCartById",
        responses: {
          200: {
            description: "Cart schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Cart",
                },
                examples: {
                  getCartByIdResponse: {
                    value: {
                      "cart": {
                        "_id": "5fc0c7c47a5c5a2824b3bdfe",
                        "buyer": "5fc020a1b50cc31e04e46823",
                        "products": [
                            {
                                "_id": "5fc0c7c47a5c5a2824b3bdff",
                                "product": {
                                    "price": 89.99,
                                    "countInStock": 10,
                                    "_id": "5fc0bbc3653b911ea40ec793",
                                    "vendor": {
                                        "_id": "5fc020a1b50cc31e04e46823",
                                        "name": "Amanuel Ewnetu",
                                        "email": "aewnetu6@gmail.com"
                                    },
                                    "name": "airpods",
                                    "image": "/images/airpods.jpg",
                                    "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working"
                                },
                                "quantity": 86
                            },
                            {
                                "_id": "5fc2aa1b54dfaf001725e1d7",
                                "product": {
                                    "price": 100.99,
                                    "countInStock": 55,
                                    "_id": "5fc2a92154dfaf001725e1cf",
                                    "vendor": {
                                        "_id": "5fc020a1b50cc31e04e46823",
                                        "name": "Amanuel Ewnetu",
                                        "email": "aewnetu6@gmail.com"
                                    },
                                    "name": "jdcnskjdskcksd",
                                    "image": "/images/sdjfksdjnfksd.jpg",
                                    "description": "phone allows you to take calls while working"
                                },
                                "quantity": 6
                            },
                        ]
                    }
                      },
                  },
                },
              },
            },
          },
          404: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "cart not found"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      delete: {
        summary: "delete cart",
        tags: ["cart"],
        operationId: "deleteCart",
        responses: {
          201: {
            description: "Cart schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Cart",
                },
                examples: {
                  deleteCartResponse: {
                    value: {
                      "_id": "5fc0c7c47a5c5a2824b3bdfe",
                      "buyer": "5fc020a1b50cc31e04e46823",
                      "products": [
                          {
                              "_id": "5fc0c7c47a5c5a2824b3bdff",
                              "product": "5fc0bbc3653b911ea40ec793",
                              "quantity": 86
                          },
                          {
                              "_id": "5fc0ded8f8037713ecbcef4b",
                              "product": "5fc0bd05fad1b6059ce1b8b2",
                              "quantity": 9
                          },
                      ],
                      "createdAt": "2020-11-27T09:32:52.282Z",
                      "updatedAt": "2020-11-28T19:51:04.196Z",
                      "__v": 8
                    },
                  },
                },
              },
            },
          },
          403: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "Error deleting cart"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError4: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },

    "/carts/removeproductfromcart/:id": {
      put: {
        summary: "remove product from user's cart by passing an id of cart's id of a single product",
        tags: ["cart"],
        operationId: "removeProductFromCart",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Cart",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Cart schema",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/definitions/Cart",
                },
                examples: {
                  removeProductFromCartResponse: {
                    value: {
                      "_id": "5fc2b895455e4828cce2cdf2",
                      "buyer": "5fc2a9bb54dfaf001725e1d0",
                      "products": [
                          {
                              "_id": "5fc2b895455e4828cce2cdf3",
                              "product": "5fc0bbc3653b911ea40ec793",
                              "quantity": 7
                          }
                      ],
                      "createdAt": "2020-11-28T20:52:37.272Z",
                      "updatedAt": "2020-11-28T20:58:59.066Z",
                      "__v": 2
                  },
                  },
                },
              },
            },
          },
          400: {
            decription: "Error message",
            content: {
              "application/json": {
                schema: {
                  $ref: '#/definitions/Error',
                },
                examples: {
                  ResponseError1: {
                    value: {
                      message: "product not found in the cart"
                    },
                  },
                  ResponseError2: {
                    value: {
                      message: "Error removing cart"
                    },
                  },
                  ResponseError3: {
                    value: {
                      message: "Not Authorized"
                    },
                  },
                  ResponseError4: {
                    value: {
                      message: "Not Authorized, no token"
                    },
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },

  definitions: {
    Product: {
      type: "object",
      properties: {
        vendor: {
          type: "string",
        },
        name: {
          type: "string",
        },
        image: {
          type: "string",
        },
        description: {
          type: "string",
        },
        price: {
          type: "number",
        },
        countInStock: {
          type: "integer",
        },
      },
    },
    UserRegister:{
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
    UserLogin:{
      type: "object",
      properties: {
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
    Cart:{
      type: "object",
      properties: {
        buyer: {
          type: "string",
        },
        products: {
          type: "array",
          properties: {
            product: {
              type: "string",
            },
            quantity: {
              type: "integer"
            }
          }
        },
      },
    },
    Error: {
      type: "object",
      properties: {
        message: {
          type: "string",
        },
      },
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  }
};
