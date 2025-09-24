import PotentialEarningCard from "@/components/home/PotentialEarningCard";
import MyLinksAndCodes from "@/components/home/myLinksAndCode";
import MyCommission from "@/components/home/myComission";
import ProfileCard from "@/components/home/profileCard";
import { CARDS } from "@/constants/cards";
import useWindowSize from "@/hooks/useWindowSize";



export const Home = () => {
  const { width } = useWindowSize();
  const isMobile = (width ?? 0) < 768;


  return (
    <main className="flex flex-col md:flex-row gap-4 w-full">
      {isMobile ? (
        <>
        <ProfileCard
            name="Jen Nelson"
            email="jennelsonfitness@gmail.com"
            cards={CARDS}
          />
          <MyCommission />
          <MyLinksAndCodes />
          <div className="pb-5">
          <PotentialEarningCard /></div></>  
      ) : (
        <>
         <div className="flex flex-col gap-4 w-full ">
        <div className="flex flex-col w-full">
          <MyCommission />
        </div>
        <div className="flex w-full">
          <MyLinksAndCodes />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex md:flex" style={{ height: "450px" }}>
          <ProfileCard
            name="Jen Nelson"
            email="jennelsonfitness@gmail.com"
            cards={CARDS}
          />
        </div>
        <div className="flex w-full" style={{ height: "200px" }}>
          <PotentialEarningCard />
        </div>
      </div></>
      )}
     
    </main>
  );
};

export default Home;
