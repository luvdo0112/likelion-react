class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "React Application",
      //isUpdateHeadline: false,
      isToggle: false,
    };

    //this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
    //클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다.
    //함수는 못하기때문에 React Hooks 써야한다. (useRef)
    //메모이제이션 패턴
    originalHeadline = this.state.headline;
  }

  handleChangeHeadline() {
    this.setState({
      headline: "NEW HEADLINE! 😃",
      //isUpdateHeadline: true,
      inToggle: true,
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
          toggle={isToggle}
        >
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;
