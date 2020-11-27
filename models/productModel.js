import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        default: 0,
    },
    countInStock: {
        type: String,
        required: true,
        default: 0,
    },
},{
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

export default Product