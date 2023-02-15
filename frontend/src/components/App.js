class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "React Application",
      isUpdateHeadline: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: "NEW HEADLINE! 😃",
      isUpdateHeadline: true,
    });
  }

  render() {
    const { headline, isUpdateHeadline } = this.state;
    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button
          type="button"
          onClick={this.handleChangeHeadline}
          disabled={isUpdateHeadline}
        >
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;
