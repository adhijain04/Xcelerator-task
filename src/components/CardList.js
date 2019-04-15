import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actions from '../store/actions/Action';

class CardList extends Component{
	render() {
	console.log(this.props);
		return(
			<div>
				<p className='card-list-header'>Card List App</p>
				<div className='cards-container'>
					{this.props.cards.length ? this.props.cards.map((card, i) => {
						return(
							<div key={i} className='card'>
								<img src={card.image} alt=""/>
								<div className="card-content-container">
									<div className='card-contents'>
										<h1 className='card-title'>{card.title}</h1>
										<div className='card-tags'>
											{card.tags.map((tag, i) => {
												return(
													<p key={i}>{tag}</p>
												)
											})}
										</div>
										<h4 className='card-desc'>{card.description}</h4>
									</div>
									<div className='card-actions-container'>
										<div>
											<i onClick={card.liked === false ? this.props.likeCard.bind(this, card.id) : null} className={card.liked ? "fas fa-thumbs-up card-action": "far fa-thumbs-up card-action"}></i>
											<i onClick={card.disliked === false ? this.props.disLikeCard.bind(this, card.id) : null} className={card.disliked ? "fas fa-thumbs-down card-action" : "far fa-thumbs-down card-action" }></i>
											<i onClick={this.props.bookmarkCard.bind(this, card.id)} className={card.bookmarked ? "fas fa-bookmark card-action" : "far fa-bookmark card-action"}></i>
										</div>
										<button className='read-more' onClick={() => {window.location.pathname=`/details/${card.id}`}}>Read More <i className="fas fa-arrow-right"></i></button>
									</div>
								</div>
							</div>
						)
					}) : <div className='error-container'>
						<p>Oops, No data to display.</p>
					</div>}
				</div>
			</div>

		)
	}
}

const MapStateToProps = state => {
	return {
		cards: state.CardReducer.cards
	}
}

const MapDispatchToProps = dispatch => {
	return {
		likeCard: (id) => dispatch(actions.likeCard(id)),
		disLikeCard: (id) => dispatch(actions.disLikeCard(id)),
		bookmarkCard: (id) => dispatch(actions.bookmarkCard(id)),
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(CardList);

