import Image from 'next/image';
import {
  Choice,
  Lizard,
  Paper,
  Rock,
  Scissors,
  Spock,
} from './choice.component';
import { Pentagon } from './pentagon.component';

export const Choices = () => {
  return (
    <div>
      <Pentagon />
      <Choice key={2} option={Spock} position="translate(-180px, -90px)" />
      <Choice key={3} option={Lizard} position="translate(-130px, 90px)" />
      <Choice key={4} option={Rock} position="translate(45px, 90px)" />
      <Choice key={5} option={Paper} position="translate(90px, -90px)" />
      <Choice key={6} option={Scissors} position="translate(-50%, -200px)" />
    </div>
  );
};
