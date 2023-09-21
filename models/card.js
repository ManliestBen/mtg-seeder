import mongoose from "mongoose"


const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  normalizedName: String,
  cmc: Number,
  colors: [String],
  manaCost: String,
  rarity: String,
  type: String,
  types: [String],
  subtypes: [String],
  text: String,
  power: String,
  toughness: String,
  imageUrl: String,
  setName: String
}, {
  timestamps: true
})

const Card = mongoose.model('Card', cardSchema)

export {
  Card
}