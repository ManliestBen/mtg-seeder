import * as fs from 'fs'
import { users } from '../config/userData.js'
import { Card } from '../models/card.js'
import { User } from '../models/user.js'

async function seedDbCards(req, res) {
  // define an array to hold all of the card objects fetched from API
  let cards = []

  // function responsible for fetching each page of data from the API
  // and pushing corresponding card objects into the cards array
  async function fetchCardList() {
    for (let i = 1; i <= 820; i++) {
      let infoToAdd = await fetch(`http://api.magicthegathering.io/v1/cards?page=${i}`)
      let infoData = await infoToAdd.json()
      console.log(`adding page ${i}`)
      cards.push(...infoData.cards)
    }
  }


  // function responsible for iterating over the cards array and creating
  // an entry in the attached mongodb database using the model that's been
  // adjusted for the needs of the application
  async function addCardsToDb() {
    for await (let card of cards) {
      delete card["id"]
      card.normalizedName = card.name.toLowerCase()
      let newCard = await Card.create(card)
      console.log(`Created ${newCard.name}`)
    }
  }

  await fetchCardList()
  await addCardsToDb()
  console.log('completed operation')
  res.redirect('/')

  // Existing code below was used to output data to view structure before adding to the database

  // fs.writeFile('./outputData.json', JSON.stringify(cards, null, 2), () => {
  //   console.log('completed operation')
  //   res.redirect('/')
  // })
}

async function seedDbUsers(req, res) {
  async function addUsersToDb() {
    for await (let user of users) {
      delete user["id"]
      let newUser = await User.create(user)
      console.log(`Created ${user.name}`)
    }
  }

  await addUsersToDb()
  console.log('completed operation')
  res.redirect('/')
}

export {
  seedDbCards,
  seedDbUsers
}