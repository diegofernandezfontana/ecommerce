import React, { Component } from 'react';
import Descripcion from '../components/Descripcion';
import ContainerReview from './ContainerReview';

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeProduct: {
        foto:
          'https://http2.mlstatic.com/led-tv-hd-32-lg-32lj520b-D_NQ_NP_701663-MLA28517356912_102018-F.webp',
        nombre: 'Led Tv Hd 32 " Lg',
        precio: 4999,
        descripcion: 'Tamaño de Pantalla Led 32 pulgadas, alta resolución, ',
      },
    };
  }
  render() {
    return (
      <div className="container">
        <div className="product">
          <div className="row">
            <div className="col-md-8">
              <img
                className="imagenProducto"
                src={this.state.fakeProduct.foto}
              />
            </div>
            <div className="col-md-4">
              <h2 className="hProducto">
                <strong>{this.state.fakeProduct.nombre}</strong>
              </h2>

              <br />
              <p className="pProducto ">
                <span className="glyphicon glyphicon-star " />
                {/* {this.state.fakeProduct.reviews.opiniones + ' opiniones'} */}
              </p>
              <br />

              <p className="pProducto ">
                <span className="glyphicon glyphicon-credit-card" />
                Paga en hasta
                <span>
                  <strong>12 cuotas</strong>
                </span>
              </p>
              <p className="pProducto" style={{ textAlign: 'left' }}>
                {'$ ' + this.state.fakeProduct.precio}
              </p>
              <br />
              <button
                type="button"
                className="btn btn-default btn-lg"
                disabled="disabled"
                style={{ marginLeft: '50%' }}
              >
                Add to cart
              </button>

              <img src="https://png.icons8.com/metro/30/000000/shopping-cart.png" />

              <button
                style={{ marginTop: '3%' }}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Comprar Ahora
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="descripcion">
                <Descripcion descripcion={this.state.fakeProduct.descripcion} />
              </div>
              <div className="reviews">
                <ContainerReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
