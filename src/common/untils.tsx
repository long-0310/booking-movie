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

export const handlePayloadMessage = (message: any) => {
  let array = []
  for (var key in message) {
    if (message.hasOwnProperty(key)) {
      array.push(message[key])
    }
  }
  return array.join("")
}

export const filterObject = (obj: any) => {
  const filteredObject = {} as any

  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== ""
    ) {
      filteredObject[key] = obj[key]
    }
  }
  return filteredObject
}

export const formatDate = (dateString: any) => {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ]
  const date = new Date(dateString)
  return `${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}`
}

export const convertTo24HourFormat = (isoDateTime: string) => {
  const date = new Date(isoDateTime)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`
}
