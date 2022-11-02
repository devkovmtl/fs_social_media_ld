export const login = (req, res, next) => {
  res.json({
    success: true,
    data: "Login",
  });
};

export const register = (req, res, next) => {
  res.json({
    success: true,
    data: "Register",
  });
};
