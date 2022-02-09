class Receipt extends React.Component {
    render() {
        const { receipt1 } = this.props;
        return(
            <div>
                <h1>{receipt1.person}</h1>
                <h3>Main: {receipt1.order.main}</h3>
                <h3>Protein: {receipt1.order.protein}</h3>
                <h3>Rice: {receipt1.order.rice}</h3>
                <h3>Sauce: {receipt1.order.sauce}</h3>
                <h3>Drink: {receipt1.order.drink}</h3>
                <h3>Cost: {receipt1.order.cost}</h3>
                <div>
                    <h3>Toppings:</h3>
                        {receipt1.order.toppings.map( topping => {
                            return <h4>{topping}</h4>

                        })}
                </div>
            </div>
        )
    }
}

 console.table(Receipt);

class App extends React.Component {
    state = {
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    }

    render() {
        return(
           <div>
                <h1>Korrila Receipts</h1>
                { this.state.receipt1.paid ? '': <Receipt receipt={this.state.receipt1} />}

                { this.state.receipt2.paid ? '' : <Receipt receipt={this.state.receipt2}/> }

                { this.state.receipt3.paid ? '' : <Receipt receipt={this.state.receipt3}/> }
                
                
           </div>
        )
    }
}
class Receipt extends React.Component {
    render() {
        const { receipts } = this.props;
        return(
            <div>
               {receipts.map(receipt => {
                   return <ul key={receipt.person}>
                       <h2>{receipt.person}</h2>
                       <li>Main: {receipt.order.main}</li>
                       <li>Protein: {receipt.order.protein}</li>
                       <li>Rice: : {receipt.order.rice}</li>
                       <li>Sauce: {receipt.order.sauce}</li>
                       <li>Drink: {receipt.order.drink}</li>
                       <li>Cost:: {receipt.order.cost}</li>
                       <div>
                           <h4>Toppings</h4>
                           <ul>
                               {receipt.order.toppings.map(item => <li key={item}>{item}</li>)}
                           </ul>
                       </div>
                    </ul>
               })}
            </div>
        )
    }
}


class Receipt extends React.Component {
    render() {
        const { receipts } = this.props;

        return(
            <div>
               { receipts.map(receipt => {
                 return  receipt.paid ? '' :  <ul key={receipt.person}>
                       <h2>{receipt.person}</h2>
                       <li>Main: {receipt.order.main}</li>
                       <li>Protein: {receipt.order.protein}</li>
                       <li>Rice: : {receipt.order.rice}</li>
                       <li>Sauce: {receipt.order.sauce}</li>
                       <li>Drink: {receipt.order.drink}</li>
                       <li>Cost:: {receipt.order.cost}</li>
                       <div>
                           <h4>Toppings</h4>
                           <ul>
                               {receipt.order.toppings.map(item => <li key={item}>{item}</li>)}
                           </ul>
                       </div>
                    </ul>
                   }
               )}
            </div>
        )
    }
}

ReactDOM.render(<Receipt/> , document.getElementById('root'))