# Pimp my Powerpuff
Welcome to our source speech repository about [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) and powerpuffs.

 - All informations are in the README 👌
 - Source code of our livecoding is described here too ! 📖
 - Feel free to open issues / PR 🤗

> Final application link : https://powerpuff.herokuapp.com/

## Who
 - Delphine MILLET [ [Twitter](https://twitter.com/milletdelphine) | [Github](https://github.com/delphinemillet) ]
 - Fabien JUIF [ [Twitter](https://twitter.com/fabienjuif) | [Github](https://github.com/fabienjuif) ]

## Deck
 - [French version](https://docs.google.com/presentation/d/1GoHkiHX7LgyHSp-Y7EWH_Rpb6s4m1Sbl593YKGG89Co/edit?usp=sharing)

## Videos
 - Comming soon

## Events
 - [Devfest Nantes, France - 2017](https://devfest2017.gdgnantes.com/)

## Livecoding
### Model
> This is about creating our first model

#### [#30](https://github.com/Dedetat/powerpuff-yourself/pull/30/files) - Create the first model and instanciate it
> Writing our first model of **Powerpuff** is pretty simple. We'll call it `Powerpuff` (damn, clever 🤓)
 1. Import `types` from `mobx-state-tree`, this is the most common used API
 2. `types` is used to ... type fields 👌, we can also use it to describe models ! And  `types.model` is the way to go !
 3. Here we create a model with only one field, a `name` which is a string !
 4. Ok, let's instanciate our model with `Powerpuff.create({})`
    - `Powerpuff` is our model
    - `create` means we instanciate a new tree, a new instance
    - `{}` is the snapshot, the raw data, to use to instanciate a new powerpuff !
 5. Let's print it with a `console.log` !
    - As you can see, we use `powerpuff.toJSON()` to convert our tree to a snapshot
 6. 🤔 oups, it doesn't work at all ! This is because, by default, a field is required
 7. Let's instanciate our powerpuff, it will be... hm... `Rebelle` (the french name of Buttercup)
 8. Print it
 9. It works 🎉

#### [#31](https://github.com/Dedetat/powerpuff-yourself/pull/31/files) - Make fields optional
> Sometimes we don't want fields to be required at creation
 1. To do so, we can use the type `maybe`, which sets the field to `null` if it's not defined
 2. So now, when we instanciate our powerpuff with an empty snapshot, it works !
 3. And if we want to instanciate the model with a valued name, we still can do it 👍

#### [#32](https://github.com/Dedetat/powerpuff-yourself/pull/32/files) - Use more complex types
> There are lots of available types provided by mobx-state-tree, find the entire list in the [documentation](https://github.com/mobxjs/mobx-state-tree#types-overview)
 1. Because a Powerpuff is not only a name but also has feelings 😡😊, we add the field `mood` to describe her
 2. Powerpuffs' personalities are simple thus possibilities are limited. Let's use an enumeration to define them
 3. If you try to create a Powerpuff with a mood which is not in the enumeration, it fails (Don't try to counterfeit a Powerpuff 💪)
 4. Use a mood of the enumeration and now you can instanciate a new Powerpuff !


### Actions
> This is how we update our model

#### [#33](https://github.com/Dedetat/powerpuff-yourself/pull/33/files) - Updating the model, the natural way
> As you must be aware, Buttercup is more `aggressive` rather than `happy`. But the powerpuff is now instanciated, the damage is done. The unique solution to repair this mistake is to modify the instance.
 1. The natural way would be to set directly the `mood` attribute of the instance
 2. As you can guess, it crashes 💥

#### [#34](https://github.com/Dedetat/powerpuff-yourself/pull/34/files) - Updating the model, mobx-state-tree way
> To mutate the model, mobx-state-tree wants you to create an action. That way mobx-state-tree can create snapshots and the immutability of the state is kept 💖
 1. Describe the action within the function `actions` called on the model
 2. We give a callback to `actions` function. This callback takes `self` as parameter, it represents the instance itself. The function returns an object of defined actions
 3. Here our action is very simple : we set the `mood` field of the instance with the given `mood`
 4. Use this action to modify the instance, it works 🎉


### Views
> There are functions that return values deduced from attributes. This is what we call views.

#### [#35](https://github.com/Dedetat/powerpuff-yourself/pull/35/files) - Create a view
> Do you know how old is our Powerpuffs now ?
 1. The best way to know is to add a `birthday` field to our model and then deduce the age from it 💡
 2. Btw, you can assign a value to a field when you create the model and mobx-state-tree will deduct the types like a grown up 👍
 3. Now we can create a view which computes the actual age of our powerpuff. Use the function `views` on the model to describe it
 4. Like actions, views is given a callback which takes `self` as parameter and return an object of functions computing results
 5. Here we write a simple getter to have the current age of the powerpuff and use it like an attribute
 6. Calling this view on the instance gives us the current age of the powerpuff 🎉
 7. Note that when we print the powerpuff, her age isn't part of the snapshot but it's memoized by mobx-state-tree


### Lifecycle
> It can be handy to do some computing during the model lifecycle. mobx-state-tree exposes lifecycle hooks that you can find in the [documentation](https://github.com/mobxjs/mobx-state-tree#lifecycle-hooks-for-typesmodel)

#### [#36](https://github.com/Dedetat/powerpuff-yourself/pull/36/files) - PreProcessSnapshot
> Instead of injecting a snapshot to create a new Powerpuff, we want to use a string describing her.
 1. `preProcessSnapshot` is called before the model instanciation 💁‍♀️
 2. It takes the snapshot given to create the instance and returns a new snapshot matching the model
 3. Here we test if the given snapshot is a string
 4. If no, we assume it's a well formed snapshot and return it
 5. If yes, we extract the mood and the name and create a new object with this attributes matching the targeted model
 6. We can now use a sentence to instanciate our powerpuff, far much simpler ✨

#### [#37](https://github.com/Dedetat/powerpuff-yourself/pull/37/files) - afterCreate
> Say that we want to capitalize the name given to a Powerpuff (yes everybody can be mistaken, even better ones 😉)
 1. `afterCreate` is called after the model instanciation 💁‍♂️
 2. It should be defined as actions to access the `self` of the instance
 3. Here we simply capitalize the name and the job is done 🙌


### Nested models
### References & Identifiers
### Utils