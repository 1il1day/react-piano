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
        <InfoDescWrap>
          <InfoDesc>
            <span>a</span> 도(C4)<br/> 
            <span>s</span> 레(D4)<br/>
            <span>d</span> 미(E4)<br/>
            <span>f</span> 파(F4)<br/>
            <span>h</span> 솔(G4)<br/>
            <span>j</span> 라(A4)<br/>
            <span>k</span> 시(B4)<br/>
            <span>l</span> 도(C5)
          </InfoDesc>
          <InfoDesc>
            <span>w</span> 도#(C4#)<br/> 
            <span>e</span> 레#(D4#)<br/>
            <span>u</span> 파#(F4#)<br/>
            <span>i</span> 솔#(G4#)<br/>
            <span>o</span> 라#(A4#)<br/>
          </InfoDesc>
        </InfoDescWrap>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  padding: 60px 0 40px;
  font-size: 32px;
  color: #333;
`;
const InfoTitle = styled.h2`
  position: relative;
  width: 240px;
  padding: 20px 0;
  text-align: center;
  background-color: #f7f7f7;
  transform: translateX(calc(-80px / 2));
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
const InfoDescWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 10px;
`;
const InfoDesc = styled.p`
  position: relative;
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  span{
    display: inline-block;
    min-width: 10px;
    color: #999;
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