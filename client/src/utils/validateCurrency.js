export default value => {
  const re = /^\d+(?:\.\d{0,2})$/;

  const invalidEmails = value
    .split(",")
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return `This field is required`;
};
