const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String , required: false}, // if you do required true so when you
    email: {type: String , required: false , unique: false},    // hit login or singup
    password: {type: String , required: false}, // its verefy by server...
    
}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.User || mongoose.model("User",UserSchema);
// export default mongoose.model("User",UserSchema);