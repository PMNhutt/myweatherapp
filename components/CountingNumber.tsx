import React from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  n: number;
}

const CountingNumber: React.FC<Props> = ({ n }) => {
  const { number: number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.p>{number.to((n) => n.toFixed(0))}</animated.p>;
};

export default CountingNumber;
