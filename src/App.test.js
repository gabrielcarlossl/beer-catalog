import React from 'react'
import ReactDOM from 'react-dom'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import Modal from 'react-modal'

let container = null

beforeEach(() => {
  // Configurar o elemento do documento onde o componente será renderizado
  container = document.createElement('div')
  document.body.appendChild(container)

  // Configurar o elemento do aplicativo para o modal
  Modal.setAppElement(document.createElement('div'))
})

afterEach(() => {
  // Limpar ao final de cada teste
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

// teste para saber se foi renderizado sem quebrar
it('renders without crashing', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        container
      );
    });
    expect(container).toBeInTheDocument();
  });
  