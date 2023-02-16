<<<<<<< HEAD
class Home extends React.Component {
  state = {
    members: this.props.likeLionMembers ?? [],
=======
import { likeLionMembers } from '../data/likeLionMembers.js';

class Home extends React.Component {
  state = {
    members: likeLionMembers
>>>>>>> 1a1c749f0e54e81debacfe3e7ca7f0d72668ae62
  };

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.state.members.filter((member) => member.lab === labNumber),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            style={{ marginBottom: 20 }}
            onClick={() => this.handleFilterLab(4)}
          >
            LAB 4조 모여!
          </button>
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

export default Home;
