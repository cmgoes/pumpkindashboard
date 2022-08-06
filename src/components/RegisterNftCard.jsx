import "../index.css";
import fantomIcon from "../assets/fantom.png";
export default function RegisterNft(props) {
  return (
    <div className="cardContainer">
      <div className="cardHeading">
        {props.heading ? props.heading : "Register To Earn"}
        <img src={props.icon ? props.icon : fantomIcon} className="cardLogo" alt="Card Logo"/>
      </div>
      <div className="cardBody">
        <div className="cardDataCntr">
          <div className="dataHeading">{"Total Registered:"}</div>
          <div className="data">{" 100/100 Nodes"}</div>
        </div>
        <div className="cardDataCntr">
          <div className="dataHeading" style={{"width":"55%"}}>{"Unclaimed Rewards:"}</div>
          <div className="data" style={{"width":"45%"}}>{" 100000.10001 ftm "}</div>
        </div>
        <div className="btnCntr">
          <div className={"btn " + props.className}>{props.registerText ? props.registerText: "Register"}</div>
          <div className={"btn " + props.className}>{props.claimText ? props.claimText: "Claim"}</div>
        </div>
      </div>
    </div>
  );
}
