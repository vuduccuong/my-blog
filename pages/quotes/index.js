import Head from "next/head";
import Quote from "../../components/quote/quote";

const QuotePage = () => {
  return (
    <div>
      <Head>
        <title>Quote Chất | Coppy code </title>
        <meta
          name="description"
          content="Dùng những thứ miễn phí để chia sẻ những thứ miễn phí 🧐 | cuongvd.ml"
        />
      </Head>
      <Quote></Quote>
    </div>
  );
};

export default QuotePage;
