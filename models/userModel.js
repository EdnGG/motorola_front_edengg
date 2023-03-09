// import mongoose from "mongoose";

// const userModelSchema = new mongoose.Schema({
//     name: { type: String, required: false },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// const UserModel1 = mongoose.model("userModel", userModelSchema);

//  Verificar si el modelo ya existe, para evitar sobrescribirlo
// const User = mongoose.models.User || mongoose.model("User", userSchema);
// const UserModel = mongoose.model("User", userSchema);
// const User = mongoose.models.User || UserModel;

// let User;
// if (mongoose.modelNames().includes("User")) {
//     User = mongoose.model("User");
// } else {
//     User = mongoose.model("User", userSchema);
// }

// Exportar el modelo de usuario

// export default UserModel1;
