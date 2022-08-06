import StakeNftCard from "./StakeNftCard";
import "../index.css";
import fantom from "../assets/fantom.png";
export default function Stake(props) {
  return (
    <div className="flex flex-col container lg:px-10 h-[100%]">
      <div className="stakeNftCntr">
        <StakeNftCard icon={fantom}/>
        <StakeNftCard icon={fantom}/>
      </div>
    </div>
  );
}
