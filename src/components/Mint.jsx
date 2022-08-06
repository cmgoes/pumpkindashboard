import MintNftCard from "./MintNftCard";
import "../index.css";
export default function Mint(props) {
  return (
    <div className="flex flex-col container lg:px-10 h-[100%]">
      <div className="registerNftCntr">
        <MintNftCard />
        <MintNftCard />
        <MintNftCard />
      </div>
    </div>
  );
}
