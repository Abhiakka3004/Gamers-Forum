let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
  GameName: String,
  review: String
});
module.exports=mongoose.model('user',userSchema);
mongoose.connect('mongodb+srv://abhiakka3004:Aakethra300829@cluster0.0aulbvl.mongodb.net/?retryWrites=true&w=majority')
.then(function(){
  console.log|('Database Connected')
})
.catch(function(){
  console.log(e)
})
