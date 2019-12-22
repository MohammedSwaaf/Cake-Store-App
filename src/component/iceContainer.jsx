import React from 'react';
import {buyIce} from '../redux';
import {connect} from 'react-redux';

function iceContainer(props) {
    return (
        <div>
            <h2>Number of ice cream = {props.numOfIce}</h2>
            <button onClick={props.buyIce}>Buy Ice</button>
        </div>
    )
}
const mapStateToProps =(state) =>{
    return{
        numOfIce: state.ice.numOfIce,
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        buyIce: ()=> dispatch(buyIce())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceContainer)
