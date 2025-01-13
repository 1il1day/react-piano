import styled, { css } from 'styled-components';

type Props = {
  code: string;
  text: string;
  volume?: number;
  sharp?: boolean;
}

export default function PianoKey({code, text, volume = 1, sharp = false}: Props) {
  const onClickBtn = (code: string) => {
    const audio = new Audio(`/sound/${code}.mp3`);
    
    audio.volume = volume;
    audio.play();
  }

  const bgColors=[
    '#FFD1DC',
    '#FFB3BA',
    '#FFCCCB',
    '#B3E0FF',
    '#D9E2F1',
    '#C2F0C2',
    '#FFF5BA',
    '#D7A6FF',
  ]

  const randomColor = bgColors[Math.floor(Math.random()*bgColors.length)];

  return (
    <>
      <PianoButton onClick={()=>{onClickBtn(code)}} sharp={sharp}>
        <PianoText bgColor={randomColor}>{text}</PianoText>
      </PianoButton>
    </>
  )
}

const sharpStyles = css`
  position: relative;
  background-color: #1C1E1D;
  width: 90px;
  height: 100%;
  color: #fff;
  &:active{
    background-color: #000;
  }
  `;

const PianoButton = styled.button<{sharp?: boolean}>`
  position: relative;
  width: 100px;
  height: 400px;
  background-color: #EEEEE7;
  border: 2px solid #B8B9B0;
  &:active{
    background-color: #cccccc;
  }
  ${({sharp})=>sharp && sharpStyles}
`;

const PianoText = styled.span<{bgColor: string}>`
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 50%;
  color: #333;
`;