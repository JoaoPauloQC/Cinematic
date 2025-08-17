import HomeContent from "@/Components/HomeContent";
import OtherProjects from "@/Components/OtherProjects";
import MRU from "@/app/MRU/MRU";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Home">
      <div className="wrapper py-10">

      
      <HomeContent></HomeContent>
      
      </div>
      <OtherProjects classname="py-20"></OtherProjects>
    </div>
  );
}
