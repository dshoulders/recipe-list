const fetchItems = (model, actions) => {
    firebase.database().ref('lists/recipes').once('value', snapshot => {
        actions.receiveItems(snapshot.val())
    }).catch((e) => {
        console.log(e)
    })
}

export default [
    fetchItems,
    (model, actions) => {
        firebase.auth().onAuthStateChanged(function (user) {

			if (!user) {
                actions.router.go('/login')
			} else {
                fetchItems(model, actions)
            }
		})
    }
]