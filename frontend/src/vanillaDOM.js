// `<div class="container container--md">
// <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
// <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
// <ul>
//   <li>React 및 ReactDOM API 활용</li>
//   <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
// </ul>
// </div>`;

// DOM 스크립트 (바닐라 스크립트)
// DOM API (접근, 탐색, 조작, 이벤트 핸들링)
// querySelector, querySelectorAll
// addEventListener, classList, setAttribute, dataset, ....

const rootElement = document.getElementById("root");

function render() {
  console.log("rendering app");
  //<div></div>
  const container = document.createElement("div");
  container.classList.add("container", "container--md");
  //container.classList.add('container container--md'.split(' ').join(','));

  //<h1></h1>
  const containerHeadline = document.createElement("h1");
  //const containerTextContent = document.createTextNode('웹브라우저 환경에서 React 라이브러리 시작하기');
  //containerHeadline.append(containerTextContent);
  // 한줄로 줄이기
  containerHeadline.textContent =
    "웹브라우저 환경에서 React 라이브러리 시작하기";

  // <p></p>
  const containerDescription = document.createElement("p");
  containerDescription.textContent =
    "React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.";

  // data -> rendering
  const learningSubjects = [
    "React 및 ReactDOM API 활용",
    "가상(Virtual) 노드 vs. 실제(Actual) DOM 노드",
  ];

  const subjectList = document.createElement("ul");

  //loop는 for / foreach or map
  learningSubjects.forEach((subject) => {
    const listItem = document.createElement("li");
    listItem.textContent = subject;
    console.log(listItem);
  });

  // container.append(containerHeadline);
  // container.append(containerDescription);
  // container.append(subjectList);
  // ,로 한줄에 적기 가능하다
  container.append(containerHeadline, containerDescription, subjectList);

  rootElement.append(container);
}

render();
