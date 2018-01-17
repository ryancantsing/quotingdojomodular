var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
    name: {type: 'string', required : true, minlength : 3},
    quote: {type: 'string', required : true, minlength: 10}
   }, { timestamps: true })
var Quote = mongoose.model('Quote', QuoteSchema);