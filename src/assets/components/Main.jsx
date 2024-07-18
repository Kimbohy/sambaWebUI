import Head from "./Head";
import Content from "./Content";

function Main({ page }) {
  return (
    <div id="main">
      <Head />
      <Content page={page} />
    </div>
  );
}

export default Main;
