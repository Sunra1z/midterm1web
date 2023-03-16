import Header from "./components/header";
import React from "react";
import Footer from "./components/footer";
import Items from "./components/items";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                 id: 1,
                 title: 'Black T-Shirt',
                 img: 'blacktshirt.webp',
                 category:'shirts',
                 price:'19.99'
                },
                {
                    id: 2,
                    title: 'White T-Shirt',
                    img: 'whitetshirt.webp',
                    category:'shirts',
                    price:'19.99'
                },
                {
                    id: 3,
                    title: 'Black hoodie',
                    img: 'blackhoodie.webp',
                    category:'hoodie',
                    price:'29.99'
                },
                {
                    id: 4,
                    title: 'Jacket',
                    img: 'jacket.webp',
                    category:'jacket',
                    price:'29.99'
                },
                {
                    id: 5,
                    title: 'White longsleeve',
                    img: 'whitelongsleeve.webp',
                    category:'longsleeve',
                    price:'25.99'
                },
                {
                    id: 6,
                    title: 'Cap',
                    img: 'cap.webp',
                    category:'cap',
                    price:'9.99'
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} />
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }
    addToOrder(item){
        this.setState({orders: [...this.state.orders, item] })
    }
}

export default App;