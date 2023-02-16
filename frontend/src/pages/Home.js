class Home extends React.Component {
  state = {
    // 모든 것을 상태로 설정하는 것은 적절하지 않다.
    members: likeLionMembers,
  };

  initialMembers = likeLionMembers;

  calcLAbCount() {
    console.log(this.state.members.length);
  }

  handleFilterLab = (labNumber) => {
    // 나는 무슨 일을 해야 하는가?
    // 데이터 분석
    // 어떻게 걸러낼 것인가?
    // 걸러내는 프로그래밍 로직은?
    this.setState({
      members: this.initialMembers.filter((member) => member.lab === labNumber),
    });
  };

  render() {
    console.log(this);

    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: "flex", gap: 8 }}>
          {Array(11)
            .fill()
            .map((_, index /* 0, 1, 2, ..., 10 */) => {
              let labIndex = index + 1; // 1, 2, 3, 4, ..., 11
              return (
                <LabButton
                  key={`lab-button-${index}`}
                  onFilter={() => this.handleFilterLab(labIndex)}
                >
                  LAB {labIndex}
                </LabButton>
              );
            })}
        </div>
        <ul>
          {this.state?.members.map(({ id, lab, name, gender }) => (
            <li key={id}>
              <p>
                <b>{lab}</b>{" "}
                <span>{gender?.includes("여성") ? "🙆🏻‍♀️" : "🙆🏻‍♂️"}</span> {name}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function LabButton(props /* { children, onFilter } */) {
  return (
    <button type="button" style={{ marginBottom: 20 }} onClick={props.onFilter}>
      {props.children}
    </button>
  );
}

export default Home;
