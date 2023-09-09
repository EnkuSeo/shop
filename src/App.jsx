import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Цагаан сандал',
          img: 'sandal.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'chairs',
          price: '125.900$',
        },
        {
          id: 2,
          title: 'Ширээ',
          img: 'shire.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '69.999$',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'buidan.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'sofa',
          price: '5.999$',
        },
        {
          id: 4,
          title: 'Дэр',
          img: 'der.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'pillow',
          price: '35000$',
        },
        {
          id: 5,
          title: 'Цагаан ширээ',
          img: 'cagaan shire.png',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '154.000$',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    )
  }
  
  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App
