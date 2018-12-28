export default (passwords, otherpasswords) => {
  const invalidPasswordLength = passwords
    .split(",")
    .map(password => password.trim())
    .filter(password => password.length < 6);

  const nonMatchingPasswords = passwords
    .split(",")
    .map(password => password.trim())
    .filter(password => (password !== otherpasswords) === true);

  if (invalidPasswordLength.length) {
    return `Password must be at least 6 characters`;
  }

  if (otherpasswords && nonMatchingPasswords.length) {
    return `Passwords do not match`;
  }

  return;
};
