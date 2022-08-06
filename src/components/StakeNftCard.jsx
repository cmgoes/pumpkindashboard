export default function StakeNftCard(props) {
  return (
    <div className="cardContainer stakeNftCard">
      <div className="stakeCardHeader">
        <div className="stakingCardText">Stake</div>
        <img src={props.icon} className="stakingCardImg" alt="Staking card" />
      </div>
      <div className="nftCardBody">
        <div className="dataItem">
          <div className="dataItemHeader">Earn:</div>
          <div className="dataItemVal">Fantom</div>
        </div>
        <div className="dataItem">
          <div className="dataItemHeader">Locking Period:</div>
          <div className="dataItemVal">17 days</div>
        </div>
        <div className="dataItem">
          <div className="dataItemHeader">APR:</div>
          <div className="dataItemVal">15%</div>
        </div>
        <div className="claimRewardsCntr">
          <div className="claimRewardsData">
            <div className="claimRewardsHeader">FTMs Earned</div>
            <div className="claimRewardsValue">200</div>
          </div>
          <div className="claimBtnCntr">
            <div className="btn fantom">Claim</div>
          </div>
        </div>
        <div className="stakeInputCntr">
          <input className="stakeInput" placeholder="Enter Amount"></input>
        </div>
        <div className={"stakeBtnCntr"}>
            <div className="btn fantom">Stake</div>
            <div className="btn fantom">Unstake</div>
        </div>
      </div>
    </div>
  );
}
