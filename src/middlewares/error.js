module.exports = (err, req, res, next) => {
  res.status(500).json({
    message: "somthing went wrong! (server error)",
  });
};
