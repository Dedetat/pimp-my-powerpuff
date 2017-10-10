const { isString, capitalize } = require('lodash')
const differenceInCalendarYears = require('date-fns/difference_in_calendar_years')
const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
    birthday: new Date(2014, 4, 18),
  })
  .actions(self => ({
    afterCreate: () => {
      self.name = capitalize(self.name)
    },
    setMood: (mood) => { self.mood = mood },
  }))
  .views(self => ({
    get age() {
      return differenceInCalendarYears(new Date(), self.birthday)
    },
  }))
  .preProcessSnapshot((snapshot) => {
    if (!isString(snapshot)) return snapshot

    const [mood, name] = snapshot.split(' ')

    return Object.assign(
      {},
      snapshot,
      {
        name,
        mood: mood.toLowerCase(),
      },
    )
  })

const rebelle = Powerpuff.create('Aggressive rebelle')

// does print the age (direct access to the view)
console.log(`${rebelle.name} is ${rebelle.age} years old :)`)

// doesnt print the age since this not a snapshot value
console.log(JSON.stringify(rebelle.toJSON(), null, 2))
