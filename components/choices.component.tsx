import {
  Choice,
  Lizard,
  Paper,
  Rock,
  Scissors,
  Spock,
} from './choice.component';

export const Choices = () => {
  return (
    <div>
      <Choice option={Rock} />
      <Choice option={Paper} />
      <Choice option={Scissors} />
      <Choice option={Lizard} />
      <Choice option={Spock} />
    </div>
  );
};
