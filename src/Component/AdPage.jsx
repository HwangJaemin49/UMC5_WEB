// import React from "react";

// function AdPage() {
//     return (
//         <div className="about__container">
//             <img style={{ width: "1520px"}} src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff1912130-0409-4e90-a90f-6091ae253e73%2Ff0e6efc3-b621-4fde-87ab-4cd4a7af3e38%2FUntitled.svg?table=block&id=baeea5c9-19d7-47a8-ba06-62f3b54b943c&spaceId=f1912130-0409-4e90-a90f-6091ae253e73&userId=32b6c5b1-21b4-4013-9d65-dd5645bd68ad&cache=v2" />
//         </div>
//     );
// }

// export default AdPage;

import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAd: true, // 초기에 광고를 표시
    };
  }

  // 광고 표시 여부를 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showAd && <Ad showAd={true} />}
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 숨기기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;