import Header from "./Header";
import SiderBar from "./SiderBar";
import Card from "../cards/Card";

import { getAllPost } from "../../dummy-data";

const Layout = () => {
  const posts = getAllPost();
  return (
    <div>
      <Header />
      <div className="container">
        <SiderBar />
        <main className="container__main">
          <h1>Posts</h1>
          <div className="list__post">
            {posts.map((postData, index) => {
              return <Card post={postData} key={index} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
