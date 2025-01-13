import styled from 'styled-components';
import PianoKey from './PianoCode';

export default function App () {

  return (
    <PianoContainer>
      <PianoInner>
        <PianoKey code="C4" text="도"/>
        <PianoKey code="D4" text="레"/>
        <PianoKey code="E4" text="미"/>
        <PianoKey code="F4" text="파"/>
        <PianoKey code="G4" text="솔"/>
        <PianoKey code="A4" text="라"/>
        <PianoKey code="B4" text="시"/>
        <PianoKey code="C5" text="도"/>
        <PianoSharpWrap>
          <PianoSharpInner>
            <PianoKey code="C4s" text="도#" sharp/>
            <PianoKey code="D4s" text="레#" sharp/>
          </PianoSharpInner>
          <PianoSharpInner>
            <PianoKey code="F4s" text="파#" sharp/>
            <PianoKey code="G4s" text="솔#" sharp/>
            <PianoKey code="A4s" text="라#" sharp/>
          </PianoSharpInner>
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