let initialState = {
	cards: [
		{
			"id": "7sd87sd87sd87sd9sa",
			"title": "Title 1",
			"description": "A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
			"image": "https://www.w3schools.com/howto/img_forest.jpg",
			"liked": false,
			"disliked": false,
			"bookmarked": false,
			"tags": ["test", "test 2"]
		},
		{
			"id": "ds89fds87dfs78dfs7",
			"title": "Title 2",
			"description": "A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
			"image": "https://www.w3schools.com/howto/img_forest.jpg",
			"liked": false,
			"disliked": false,
			"bookmarked": false,
			"tags": ["test 2", "great"]
		},
		{
			"id": "34asd56asd8798adsa",
			"title": "Title 3",
			"description": "A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
			"image": "https://www.w3schools.com/howto/img_forest.jpg",
			"liked": false,
			"disliked": false,
			"bookmarked": false,
			"tags": ["test", "test 2", "great"]
		}
	]
};

const CardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LIKE" :
			let cardsLike = [...state.cards];
			for(let i = 0; i < cardsLike.length; i++){
				if(action.value === cardsLike[i].id){
					cardsLike[i].liked = true;
					cardsLike[i].disliked = false;
				}
			}
			return {
				...state,
				cards: cardsLike
			}
		case "DISLIKE" :
			let cardsDislike = [...state.cards];
			for(let i = 0; i < cardsDislike.length; i++){
				if(action.value === cardsDislike[i].id){
					cardsDislike[i].liked = false;
					cardsDislike[i].disliked = true;
				}
			}
			return {
				...state,
				cards: cardsDislike
			}
		case "BOOKMARK" :
			let cardsBookmark = [...state.cards];
			for(let i = 0; i < cardsBookmark.length; i++){
				if(action.value === cardsBookmark[i].id){
					cardsBookmark[i].bookmarked = !cardsBookmark[i].bookmarked;
				}
			}
			return {
				...state,
				cards: cardsBookmark
			}
		default :
			return state
	}
}

export default CardReducer;
