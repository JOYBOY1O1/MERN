const asyncHandler = require("express-aysnc-Handler");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userExist = await User.findOne({ email });
  //mongo db ki query hai to check is present or not
});
