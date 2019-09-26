const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Chat', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : true

})

mongoose.connection.once('open', () =>
console.log('Connection established'))
.on('error',(error) => {
console.log('Warning :' +error)
})