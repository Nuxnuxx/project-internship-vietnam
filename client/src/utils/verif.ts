export const isValidEmail = (email: string) => {
  // Regular expression pattern for email validation
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

  // Check if the email matches the pattern
  return emailRegex.test(email)
}

export const isValidPassword = (password: string) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
    password,
  )
}

export const isValidUsername = (username: string) => {
  return username.length > 3 ? true : false
}
