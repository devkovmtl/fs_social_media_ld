// Get all users
export const getUser = (req, res, next) => {
  const { userId } = req.params;
  // Todo
  res.json({
    success: true,
    data: `Find specific user: ${userId}`,
  });
};
