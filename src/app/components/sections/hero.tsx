import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.png";


const hero = () => {
  return (
        <section>
            <Wrapper>
            <div className="flex">
                {/* LEFT CONTENT */}
                <div className="flex-1">
                    <h4>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                    <h1>Certified Web 3.0 and Metaverse Developer</h1>
                    <p>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                    <p>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                    <button>Learn More</button>
                </div>
                {/* RIGHT CONTENT */}
                <div className="flex-1">
                    <Image src={HeroPoster} alt="Hero Poster"/>
                </div>
            </div>

            </Wrapper>
        </section>
  )
}

export default hero