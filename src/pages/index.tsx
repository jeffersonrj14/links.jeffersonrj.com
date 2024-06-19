import PagesMetaHead from "@/components/PagesMetaHead";
import Hero from "@/components/index/Hero";

function Home() {
  return (
    <div className="container mx-auto text-jefferson-light text-lg">
      <PagesMetaHead title="Home" />
      <div className="mt-10 sm:mt-15 flex justify-center">
        <Hero />
      </div>
    </div>
  );
}

export default Home;
