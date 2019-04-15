export const likeCard = (id) => {
	console.log(id)
	return {
		type: "LIKE",
		value: id
	}
}

export const disLikeCard = (id) => {
	console.log(id)
	return {
		type: "DISLIKE",
		value: id
	}
}

export const bookmarkCard = (id) => {
	console.log(id)
	return {
		type: "BOOKMARK",
		value: id
	}
}