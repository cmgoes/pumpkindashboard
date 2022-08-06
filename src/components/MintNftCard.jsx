export default function MintNftCard(props) {
    return (
        <div className="cardContainer nftCard">
            <div className={"nftCardImg"}></div>
            <div className="nftCardHeader">Mint NFT</div>
            <div className="nftCardBody">
                <div className="dataItem">
                    <div className="dataItemHeader">Mint Price:</div>
                    <div className="dataItemVal">50 ftm</div>
                </div>
                <div className="dataItem"></div>
                <div className={"btn fantom"} style={{"border-radius": "5px", "display":"flex", "justify-content": "center"}}> Mint </div>
            </div>
        </div>
    );
}