import monoogse, { Schema } from 'mongoose'

const cartSchema = monoogse.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            subTotal: {type: Number},
            quantity: {type: Number},
        }
    ]

})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart