import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  code: string;
  text: string;
  volume?: number;
  sharp?: boolean;
  keyMap: string;
}


export default function PianoKey({code, text, volume = 1, sharp = false, keyMap}: Props) {
  const [randomColor, setRandomColor] = useState('');
  const [isActive, setIsActive] = useState(false);

  /**
   * 피아노 사운드 재생 함수
   * @param code 피아노 코드
   */
  const playCode = (code: string) => {
    const audio = new Audio(`/sound/${code}.mp3`);
    
    audio.volume = volume;
    audio.play();
  }

  useEffect(()=>{
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
    setRandomColor(bgColors[Math.floor(Math.random()*bgColors.length)]);
  },[])
  
  useEffect(()=>{
    /**
     * KeyDown시 피아노 사운드 재생
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key == keyMap && !isActive){
        setIsActive(true);
        playCode(code);
      }
    }
    /**
     * KeyUp시
     */
    const handleKeyUp = (event: KeyboardEvent) => {
      if(event.key == keyMap){
        setIsActive(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => { // cleanUp
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  },[code, volume, keyMap, isActive])

  return (
    <>
      <PianoButton onClick={()=>{playCode(code)}} $sharp={sharp} isActive={isActive}>
        <PianoText $bgColor={randomColor}>{text}</PianoText>
      </PianoButton>
    </>
  )
}

const sharpStyles = css<{isActive: boolean}>`
  position: relative;
  background-color: #1C1E1D;
  width: 90px;
  height: 100%;
  color: #fff;
  &:active{
    background-color: #000;
  }
  ${({isActive})=>isActive && css`
    background-color: #000;
  `}

`;

const PianoButton = styled.button<{$sharp?: boolean, isActive: boolean}>`
  position: relative;
  width: 100px;
  height: 400px;
  background-color: #EEEEE7;
  border: 2px solid #B8B9B0;
  &:active{
    background-color: #cccccc;
  }
  ${({isActive})=>isActive && css`
    background-color: #cccccc;
  `}
  ${({$sharp})=>$sharp && sharpStyles}
`;

const PianoText = styled.span<{$bgColor: string}>`
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({$bgColor}) => $bgColor};
  border-radius: 50%;
  color: #333;
`;