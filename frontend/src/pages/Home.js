import { likeLionMember } from "../data/likeLionMembers.js";

class Home extends React.Component {
  state = {
    members: likeLionMember,
  };

  handleFilterLab = () => {
    console.log("filtering");
  };
  render() {
    return (
      <React.Fragment>
        <h2>멋사 프론트엔드 스쿨 4기</h2>
        <button
          type="button"
          style={{ "margin-bottom": 10 }}
          onClick={this.handleFilterLab}
        >
          10조 모여!
        </button>
        <ul>
          {this.state.members.likeLionMember.map(
            ({ id, name, price, image }) => (
              <li key={id}>
                <p>
                  <span>{gender.inCludes("남자") ? "남" : "여"}</span> {name}
                </p>
              </li>
            )
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
