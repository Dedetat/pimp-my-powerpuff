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

const Store = types
  .model({
    edited: types.maybe(types.reference(Powerpuff)),
    powerpuffs: types.optional(types.array(Powerpuff), []),
  })
  .actions(self => ({
    addPowerpuff: (powerpuff) => { self.powerpuffs.push(powerpuff) },
    setEdited(powerpuff) { self.edited = powerpuff },
  }))

const store = Store.create()
store.addPowerpuff('Aggressive rebelle')
store.addPowerpuff({ name: 'Belle', mood: 'happy' })
console.log(JSON.stringify(store.toJSON(), null, 2))

store.setEdited(store.powerpuffs[1])
console.log(JSON.stringify(store.toJSON(), null, 2))
