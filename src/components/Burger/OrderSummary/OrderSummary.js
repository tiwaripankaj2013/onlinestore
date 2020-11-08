import React,{Component} from 'react';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('order summary update')
    }
        render(){
            const ingredientSummary  = Object.keys(this.props.ingredients)
            .map(igKey => {
                 return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> 
                 : {this.props.ingredients[igKey]}</li>
            })
            return(
                <>
                    <h3>your order</h3>
                    <p>A deliscious burger with the following ingredients:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price:{this.props.price.toFixed( 2 )}</strong></p>
                    <p>Continue to Checkout</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
                </>
            )    
        }
    
        
};

export default OrderSummary;