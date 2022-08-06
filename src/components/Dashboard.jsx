import RegisterNft from "./RegisterNftCard.jsx";
import daiIcon from "../assets/dai.png";
import fantomIcon from "../assets/fantom.png";
import pumpkinIcon from "../assets/pumpkin.png";
import tombIcon from "../assets/tomb.jpeg";

export default function Dashboard(props) {
  return (
    <div className="flex flex-col container lg:px-10 h-[100%]">
      <div className="infoCard">
        <div className="infoCardHeading">Dashboard</div>
        <div className="infoCardData">
          <div className="infoCardText">
            Earn rewards by staking your NFTs to different plans and get
            respective rewards. Just register to the plans and get rewards.
          </div>
          <div className="actionAllBtnCntr">
            <div className="btn fantom" style={{ "margin-top": "10px" }}>
              Register to all
            </div>
            <div className="btn fantom" style={{ "margin-top": "10px" }}>
              Claim all rewards
            </div>
          </div>
        </div>
      </div>
      <div className="registerNftCntr">
        <RegisterNft icon={fantomIcon} className={" fantom"} />
        <RegisterNft icon={pumpkinIcon} className={" pumpkin"} />
        <RegisterNft icon={tombIcon} className={" tomb"} />
        <RegisterNft icon={daiIcon} className={" dai"} />
      </div>
    </div>
  );
}
