import { model } from "mongoose";
import { UserSchema } from "../schema/UserSchema.js";

const UserModel = model("User", UserSchema);

export default UserModel;
