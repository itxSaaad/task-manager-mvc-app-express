const notFoundHandler = (req, res, next) => {
  const message = `Route not found - ${req.originalUrl}`;
  res.status(404).send(message);
};

export default notFoundHandler;
