export const validateEmail = (email: string) => {
  const re = new RegExp(
    `^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`,
  )
  const isValidEmail = re.test(String(email).toLowerCase())
  const [username, domain] = email.split("@")
  const isLowerCase = username === username.toLocaleLowerCase()
  return isValidEmail && isLowerCase
}

export const validatePassword = (password: string) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,16}$/
  return re.test(String(password))
}
