import { Component } from 'react';

class ClassBasedComponent extends Component {
  state = {
    showText: true,
    changeColour: true,
    count: 0,
    changeCountStyle: false,
  };

  //* Another way to initialize state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     anotherText: false,
  //   };
  // }

  handleClick = () => {
    this.setState({
      showText: !this.state.showText,
      changeColour: !this.state.changeColour,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  //* Life Cycle methods

  //* Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    console.log('This is called on first time of page load');

    this.setState({
      showText: !this.state.showText,
      changeColour: !this.state.changeColour,
    });
  }

  //* Called immediately after updating occurs. Not called for the initial render.
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    console.log(prevState, this.state);

    if (prevState && prevState.count !== this.state.count && this.state.count === 10) {
      this.setState({
        ...this.state,
        changeCountStyle: !this.state.changeCountStyle,
      });
    }
  }

  //* Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
  componentWillUnmount() {
    console.log('This is called on page unload');
  }

  render() {
    // console.log(this.state.showText);

    const { showText, changeColour, count, changeCountStyle } = this.state;

    const countStyle = {
      color: changeCountStyle ? 'red' : 'green',
      fontSize: '20px',
      marginBottom: '10px',
    };

    const toggleButtonStyle = {
      color: changeColour ? 'red' : 'green',
      backgroundColor: 'white',
      padding: '6px 12px',
      marginRight: '10px',
      border: '1px solid #ccc',
      cursor: 'pointer',
    };

    const incrementButtonStyle = {
      padding: '6px 12px',
      border: '1px solid #ccc',
      cursor: 'pointer',
    };

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        {showText && <h3>Class Based component</h3>}

        <h4 style={countStyle}>Count: {count}</h4>

        <button onClick={() => this.handleClick()} style={toggleButtonStyle}>
          {showText ? 'Hide' : 'Show'}
        </button>

        <button onClick={this.handleCount} style={incrementButtonStyle}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassBasedComponent;
