import { faker } from "@faker-js/faker"

function createRandomUsername() {
  return faker.name.firstName()
}

export const users = Array.from({ length: 100 }).map(() =>
  createRandomUsername()
)

//name as fake query
export const getUsers = (query) => {
  const result = []

  for (const user of users) {
    if (result.length === query.limit) break

    if (user.toLowerCase().includes(query.name.toLowerCase() || "")) {
      result.push(user)
    }
  }

  return result
}

const list = {
  Charlie: "0002",
  Danny: "0005",
  Hugh: "0008",
  YT: "0015",
  "0002": "Charlie",
  "0005": "Danny",
  "0008": "Hugh",
  "0015": "YT",
}

export const login = (username) => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
      if (!list[username]) {
        reject(new Error("Oops! User not existed!"))
      }

      if (random > 3) {
        resolve({ token: list[username] })
        return
      }

      reject(
        new Error(
          "Oops! Just mocking random error(typo or expired situation), try again?"
        )
      )
    }, 1000)
  })
}

export const getMe = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!list[token]) {
        reject(new Error("Oops! User not existed!"))
      }

      resolve({ username: list[token] })
      return
    }, 1000)
  })
}
