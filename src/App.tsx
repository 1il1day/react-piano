import styled from 'styled-components';
import PianoKey from './PianoCode';

export default function App () {

  const pianoKeys = [
    { code: "C4", text: "도", map:'a' },
    { code: "D4", text: "레", map:'s' },
    { code: "E4", text: "미", map:'d' },
    { code: "F4", text: "파", map:'f' },
    { code: "G4", text: "솔", map:'h' },
    { code: "A4", text: "라", map:'j' },
    { code: "B4", text: "시", map:'k' },
    { code: "C5", text: "도", map:'l' },
  ];

  const pianoSharps = [
    [
      { code: "C4s", text: "도#", map:'w' },
      { code: "D4s", text: "레#", map:'e' },
    ],
    [
      { code: "F4s", text: "파#", map:'u' },
      { code: "G4s", text: "솔#", map:'i' },
      { code: "A4s", text: "라#", map:'o' },
    ],
    
  ]

  return (
    <Container>
      <InfoContainer>
        <InfoTitle>리액트 피아노</InfoTitle>
      </InfoContainer>
      <PianoContainer>
        <PianoInner>
          {pianoKeys.map((key)=>(
            <PianoKey key={key.code} code={key.code} text={key.text} keyMap={key.map}/>
          ))}
          <PianoSharpWrap>
            {pianoSharps.map((sharps, index)=>(
              <PianoSharpInner key={index}>
                {sharps.map((sharp)=>(
                  <PianoKey key={sharp.code} code={sharp.code} text={sharp.text} sharp  keyMap={sharp.map}/>
                ))}
              </PianoSharpInner>
            ))}
          </PianoSharpWrap>
        </PianoInner>
      </PianoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3f3f3f;
`;
const InfoContainer = styled.div`
  max-width: 400px;
  padding: 100px 50px;
  font-size: 32px;
  color: #333;
`;
const InfoTitle = styled.h2`
  position: relative;
  padding: 20px 40px;
  background-color: #f7f7f7;
  &::after{
    content: "";
    position: absolute;
    top: 0;
    right: -79px;
    width: 80px;
    height: 100%;
    background: #ffdc13;
  }
`;
const PianoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`;
const PianoInner = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;
const PianoSharpWrap = styled.div``;
const PianoSharpInner = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  display: flex;
  height: calc(100% - 150px);
  gap: 10px;
  &:last-child{
    left: 350px;
  }
`;