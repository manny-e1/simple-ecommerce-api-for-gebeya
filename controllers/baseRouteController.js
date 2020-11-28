
export const baseRoute = (_,res) => {
    res.status(200).json({
        userRoutes: {
            login: {
                route: '/users/login',
                method: 'POST'
            },
            register: {
                route: '/users/register',
                method: 'POST'
            },
            getAllUser: {
                route: '/users/all',
                method: 'GET'
            },
            getUserById: {
                route: 'users/:id',
                method: 'GET'
            },
            updateLoggedInUserField: {
                route: '/users/update',
                method: 'PUT'
            },
            deleteUser: {
                route: '/users/delete/:id',
                method: 'DELETE'
            },
        },
        ProductRoutes: {
            createProduct: {
                route: '/products/create',
                method: 'POST'
            },
            getAllProducts: {
                route: '/products',
                method: 'GET'
            },
            getProductById: {
                route: '/products/:id',
                method: 'GET'
            },
            deleteProduct: {
                route: '/products/delete/:id',
                method: 'DELETE'
            },
        },
        cartRoutes: {
            addItemsToCart: {
                route: '/carts/addToCart',
                method: 'POST'
            },
            getAllCarts: {
                route: '/carts',
                method: 'GET'
            },
            getCartById: {
                route: '/carts/:id',
                method: 'GET'
            },
            deleteCartById: {
                route: '/carts/delete/:id',
                method: 'DELETE'
            },
            removeProductFromCart: {
                route: '/carts/removeproductfromcart/:id',
                method: 'PUT'
            }
        }
    })
}