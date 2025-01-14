import styled from 'styled-components';
import PianoKey from './PianoCode';

export default function App () {

  const pianoKeys = [
    { code: "C4", text: "도" },
    { code: "D4", text: "레" },
    { code: "E4", text: "미" },
    { code: "F4", text: "파" },
    { code: "G4", text: "솔" },
    { code: "A4", text: "라" },
    { code: "B4", text: "시" },
    { code: "C5", text: "도" },
  ];

  const pianoSharps = [
    [
      { code: "C4s", text: "도#" },
      { code: "D4s", text: "레#" },
    ],
    [
      { code: "F4s", text: "파#" },
      { code: "G4s", text: "솔#" },
      { code: "A4s", text: "라#" },
    ],
    
  ]

  return (
    <PianoContainer>
      <PianoInner>
        {pianoKeys.map((key)=>(
          <PianoKey key={key.code} code={key.code} text={key.text}/>
        ))}
        <PianoSharpWrap>
          {pianoSharps.map((sharps, index)=>(
            <PianoSharpInner key={index}>
              {sharps.map((sharp)=>(
                <PianoKey key={sharp.code} code={sharp.code} text={sharp.text} sharp/>
              ))}
            </PianoSharpInner>
          ))}
        </PianoSharpWrap>
      </PianoInner>
    </PianoContainer>
  )
}

const PianoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
  background-color: #3f3f3f;
  border: 1px solid #999;
`;
const PianoInner = styled.div`
  position: relative;
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