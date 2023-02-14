/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group() {
  return (
    <div role="group" lang="en">
      Group Element
    </div>
  );
}

// 클래스 컴포넌트
class Logo extends React.Component {
  // 렌더링
  render() {
    // React 엘리먼트 반환
    return <img src="/assets/react-logo.svg" alt="React" />;
  }
}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render([
  // with JSX
  <div role="group" lang="en" key="with-jsx">
    <Logo />
  </div>,

  // without JSX
  React.createElement(
    "div",
    { role: "gorup", lang: "en", key: "without-jsx" },
    React.createElement(Logo)
  ),
]);

// 함수의 arguments vs React의 Props

function sum(x, y) {
  return x + y;
}

sum(10, 1000);

// React 컴포넌트의 props
function MenuList() {
  return React.createElement("ul", {}, React.createElement("li", {}, "item 1"));
}

// React.createElement(MenuList);
// <MenuList></MenuList>
