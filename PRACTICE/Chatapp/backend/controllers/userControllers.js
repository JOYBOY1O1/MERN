const asyncHandler = require("express-aysnc-Handler");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;
});
