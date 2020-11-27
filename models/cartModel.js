import mongoose from 'mongoose'

const cartSchema =  mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {type: Number},
        }
    ]

},{
    timestamps: true,
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart