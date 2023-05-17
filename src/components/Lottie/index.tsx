import { TLottie } from '@types';
import * as Lottie from 'react-lottie';

const GreetingLottie = ({ animationPath }: TLottie) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
