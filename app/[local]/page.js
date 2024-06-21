import Hero from "./components/Hero/Hero";
import About_Us from "./components/About_Us/About_Us";
import Services from "./components/services/services";
import Steps from "./components/Steps/Steps";
import ContactusInHome from "./components/ContactUs/InHome/pageContent.jsx";
import Univercities from "./components/Univercities/Univercities";
import Blog from "./components/Blog/Blog";
import Review from "./components/Review/Review";

export default async function Home({ params: { local } }) {
  
  return (
    <main className="">
      <Hero local={local} />
      <About_Us local={local} />
      <Services local={local} />
      <Steps local={local} />
       <ContactusInHome local={local} />
      <Univercities local={local} /> 
      <Blog local={local} />
      <Review local={local} />
    </main>
  );
}
