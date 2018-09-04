const { createElement } = React;
const { render } = ReactDOM;

const title = createElement(
  'h1', //whatever we want to create
  {id: 'title',className: 'header'}, //any properties that this elements should have
  'Hello World' //is the child component the element should have
)

render(
  title, //name of the element we want to render
  document.getElementById('react-container') //where we want to render this element
)
