function transfer(user, cents) {
  if (cents < 0) {
    user.balance -= cents;
    return user.balance;
  }
  user.balance -= cents;
  return user.balance;
}

module.exports = { transfer };
