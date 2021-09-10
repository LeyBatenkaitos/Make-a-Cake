module.exports = (user) => {
  const { firstName, lastName, email: _email, _id } = user;
  return { firstName, lastName, email: _email, _id };
};
