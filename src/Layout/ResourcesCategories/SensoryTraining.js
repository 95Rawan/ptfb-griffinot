import React from 'react';
import categoryData from '../../Data/categoryData';
import {
  TitleCategory, Container, BodyCategory, Link,
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const SensoryTraining = () => (
  <>
    <Container>
      <TitleCategory>Here are other resources that can help your child:</TitleCategory>
    </Container>
    <BodyCategory>
      {categoryData.map(({ Title, ImageCategory, LinkCategory }) => (
        <Link href={LinkCategory}>

          <ResourcesCategory Title={Title} ImageCategory={ImageCategory} />
        </Link>
      ))}
    </BodyCategory>
    <PrevButton prevLink="/resources" margin="54rem" />
  </>
);
export default SensoryTraining;
