import { Admin } from "../models/admin.model.js";
import { ApiError } from "../middlewares/apiError.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

export const registerAdminPage = asyncHandler(async (req, res) => {
 console.log(res)
 res.send("Hello Welcome")

});

