import { fakerRU as faker } from '@faker-js/faker'

export class UserBuilder {
  addEmail() {
    this.email = faker.internet.email({ provider: 'stavka.tv' })
    return this
  }
  addFirstName() {
    this.firstName = faker.person.firstName('male')
    return this
  }
  addSecondName() {
    this.secondName = faker.food.adjective()
    return this
  }
  addPassword() {
    this.password = faker.internet.password()
    return this
  }
  addFailPassword() {
    this.userPassword = faker.internet.password({ length: 3 })
    return this
  }
  generate() {
    const copied = structuredClone({
      email: this.email,
      firstName: this.firstName,
      secondName: this.secondName,
      password: this.password,
      failPassword: this.userPassword
    })
    return copied
  }
}

export class PredictionTextBuilder {
  addText() {
    this.text = faker.lorem.lines({ min: 3, max: 6 })
    return this
  }
  addNewText() {
    this.newText = faker.lorem.lines({ min: 3, max: 6 })
    return this
  }
  setMatchNumber() {
    this.matchNumber = faker.number.int({ min: 0, max: 6 })
    return this
  }

  generate() {
    const copied = structuredClone({
      text: this.text,
      newText: this.newText,
      matchNumber: this.matchNumber
    })
    return copied
  }
}
