
import ComingSoon from "../components/coming-soon/coming-soon";
import HeadSEO from "../components/seo/Head";

const HomePage = () => {
  return (
    <div className="my-app">
      <HeadSEO />
      <main>
        <ComingSoon />
      </main>
    </div>
  );
};

export default HomePage;
