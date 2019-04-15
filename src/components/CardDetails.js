import React, {Component} from 'react';
import {connect} from "react-redux"
import './CardDetails.css';
import * as actions from '../store/actions/Action';

class CardDetails extends Component{
	render(){
		return(
			this.props.cards.map((card, i) => {
				return(
					card.id === this.props.match.params.id ? (
						<div id="card-details-container" key={i} style={{backgroundImage: `url(${card.image}), linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)`}}>
							<button className='back-button' onClick={() => window.location.pathname="/"}><i className="fas fa-chevron-left"></i> Back</button>
							<h1 className='card-details-title'>{card.title}</h1>
							<div className='card-details-tags-action-container'>
								<div className='card-details-tags'>
									{card.tags.map((tag, i) => {
										return(
											<p key={i}>{tag}</p>
										)
									})}
								</div>
								<div className='card-details-actions'>
									<i onClick={card.liked === false ? this.props.likeCard.bind(this, card.id) : null} className={card.liked ? "fas fa-thumbs-up card-action": "far fa-thumbs-up card-action"}></i>
									<i onClick={card.disliked === false ? this.props.disLikeCard.bind(this, card.id) : null} className={card.disliked ? "fas fa-thumbs-down card-action" : "far fa-thumbs-down card-action" }></i>
									<i onClick={this.props.bookmarkCard.bind(this, card.id)} className={card.bookmarked ? "fas fa-bookmark card-action" : "far fa-bookmark card-action"}></i>
								</div>
							</div>
							<h4 className='card-details-desc'>{card.description}</h4>
							<h4 className='related-cards-heading'>Related Cards</h4>
							<div className='related-card-list-container'>
								{this.props.cards.map((card, i) => {
									return(
										card.id !== this.props.match.params.id ? (
											<div className='related-card' onClick={() => {window.location.pathname=`/details/${card.id}`}}>
												<img src={card.image} alt="" />
												<div className='related-card-details'>
													<h4>{card.title}</h4>
													<p>{card.description}</p>
												</div>
											</div>
										) : null
									)
								})}
							</div>
						</div>
					) : null
				)
			})
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


export default connect(MapStateToProps, MapDispatchToProps)(CardDetails);