import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';
function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of Cakes = {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}   
const mapStateToProps = (state) => {
    return {
        numOfCake: state.cake.numOfCake,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
