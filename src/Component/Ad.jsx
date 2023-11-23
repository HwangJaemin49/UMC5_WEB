// import React from "react";

// class Ad extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);

//         this.state = {isToggleOn: true};
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//         let { isToggleOn } = this.state;
//         const authButton = () => {
//             if (isToggleOn) {
//                 return (
//                     <div>
//                         <img style={{ width: "1520px"}} src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff1912130-0409-4e90-a90f-6091ae253e73%2Ff0e6efc3-b621-4fde-87ab-4cd4a7af3e38%2FUntitled.svg?table=block&id=baeea5c9-19d7-47a8-ba06-62f3b54b943c&spaceId=f1912130-0409-4e90-a90f-6091ae253e73&userId=32b6c5b1-21b4-4013-9d65-dd5645bd68ad&cache=v2" />
//                         <button>광고 보지 않기</button>
//                     </div>
//                 );
//             } else {
//                 this.state = {isToggleOn: true};
//                 return (
//                     <div>
//                         <button>광고 보기</button>
//                     </div>
//                 )
//             }
//         };
//         return (
//             <div>
//                 테스트
//                 {authButton()}
//             </div>
//         );
//     }
// }

// export default Ad;

import React from 'react';
import adPath from './images/adBanner.svg'

export default function Ad({ showAd }) {
  if (!showAd) {
    return null; // 광고를 표시하지 않음
  }

  return (
    <div>
      <img
      className='adImg'
      src={adPath} // img 폴더에 배너 이미지 추가
      alt="광고 배너"
      />
    </div>

  );
}