
import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux';
import { addReview } from '../redux/action-creators/review-action'
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import { fetchUsers } from '../redux/action-creators/users';



function mapStateToProps(state) {
  return {
    rev: state.review,
    user: state.user,
    producto: state.products.product,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addReview: function (value, user, product, estrellas) {
      dispatch(addReview(value, user, product, estrellas))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
  }
}
class ContainerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addReview: [],
      reviews: [],
      currentProduct: 0,
      producto: this.props.producto,
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.producto.id == this.state.producto.id) {
      return
    } else {
      this.setState({ producto: nextProps.producto })
      axios.get(`/api/reviews/${nextProps.producto.id}`)
        .then(reviews => this.setState({ reviews: reviews.data }))
    }
  }
  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addReview(this.state.value, this.props.user, this.props.producto, this.state.rating)
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    // console.log(this.state.rating)
    // console.log(this.state.reviews)
    // console.log(this.props.producto)
    // const { rating } = this.state.rating;
    return (

      <div>
        <ReviewInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} rating={this.state.rating} onStarClick={this.onStarClick} />
        <Reviews reviews={this.state.reviews} users={this.props.users} addReview={this.props.rev} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerReview)
