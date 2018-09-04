// const { createElement } = React;
const { render } = ReactDOM;

// const style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// };

// const title = createElement(
//   'h1', //whatever we want to create
//   {id: 'title',className: 'header', style:style}, //any properties that this elements should have
//   'Hello World' //is the child component the element should have
// )

render(
  //title, //name of the element we want to render
  <h1 id='title' className='header' style={{backgroundColor: 'orange',color: 'white',fontFamily: 'verdana'}}> //can be done like this also style={style}
  Hello World
  </h1>,
  document.getElementById('react-container') //where we want to render this element
)
