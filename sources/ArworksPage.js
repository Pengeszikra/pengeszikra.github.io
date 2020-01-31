import React, {useState} from 'react';
import {noprop, stopProp} from "react-slash";
import MockReality from '../src/layouts/MockReality';
import AnnotationModal from '../src/layouts/AnnotationModal';
import useAnnotation from '../src/hooks/useAnnotation';

import {Page, Layer,Setup, Info, Cancel, ModelName, ModalWindow, Title } from '../src/skins/arworksSkin';

const DetailsModal = () => (
  <ModalWindow onClick={stopProp}>
    <Title>Details</Title><hr/>
    <p>Dimension:</p>
    <p>X: 0.01 m</p>
    <p>Y: 0.055 m</p>
    <p></p>
    <p>Production date:</p>
    <p>1/3/2019</p>
    <Title>Additional</Title><hr/>
    <p>Loreipsum ...</p>
  </ModalWindow>
);

export default ({navigation}) => {
  const [modal, setModal] = useState(0);
  const clickToMain = () => navigation('main');
  const clickSetup = () => setModal(prev => prev === 1 ? 0 : 1);
  const clickInfo = () => setModal(prev => prev === 2 ? 0 : 2);
  const annotation = useAnnotation();

  return (
    <Page>
      <Layer>
        <MockReality />
      </Layer>    
      <Info onClick={noprop(clickInfo)}>Info {modal == 2 && <DetailsModal />}</Info> 
      <Setup onClick={noprop(clickSetup)}>Setup {modal == 1 && <AnnotationModal {...annotation} />}</Setup> 
      <ModelName>Teszt test</ModelName>
      <Cancel onClick={noprop(clickToMain)}>X</Cancel>
    </Page>
  );
}