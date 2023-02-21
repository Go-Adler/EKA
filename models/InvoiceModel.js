const mongoose = require('mongoose')
const Schema = mongoose.Schema;

ObjectId = Schema.ObjectId

const invoiceSchema = new Schema({
    userId        :{
        type    : ObjectId,
        required:true
    },
    product         :[
    {
        id: { type: ObjectId },
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number},
    }

    ],
    orderId        :{
        type    : String,
        required:true
    },
    date        :{
        type    : Date,
        required:true
    },
    status        :{  //1-processing, 2-dispatched,3-out for delivery,3-delievered,4-failed,5-cancelled
        type    : String, 
        required:true,
        default:"processing"
    },   
    payment_method   :{   //1-razorPay 2-Card, 3-Cash on delivery
        type    : String,
        required:true
    },
    paid_amount:{type  :Number},
    addressId        :{
        type:ObjectId
    },
}) 

module.exports = mongoose.model('Invoice',invoiceSchema)