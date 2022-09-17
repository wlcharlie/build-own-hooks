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
