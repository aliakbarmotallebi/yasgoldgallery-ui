function RouterFunction() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/ordersummary" component={OrderSummary} />
            <Route path="/product/:id" component={ProductItems} />
            <Route path="*" component={() => <h2>404 Not Found </h2>} />
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default RouterFunction;