import mongoose from "mongoose"


const Schema = mongoose.Schema

const geoSchema = new Schema({
  lat: String,
  lng: String
})

const addressSchema = new Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: geoSchema
})

const companySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
})

const userSchema = new Schema({
  name: String,
  userName: String,
  email: String,
  address: addressSchema,
  phone: String,
  website: String,
  company: companySchema

}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export {
  User
}