import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import LevelPop from '../../CommonComponents/LevelPop';
import LevelData from './QuestionnaireData';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
  QuestionContainer,
  Paragraph,
  DivNextPrev,
} from './index.style';
import NextButton from '../../CommonComponents/NextButton';
import PrevButton from '../../CommonComponents/PrevButton';

const SectionC = ({
  checkboxChange,
  nextButtonClickHandler,
  checkedQuestions,
  checkedItems,
}) => (
  <>
    <QuestionContainer>
      <Paragraph>
        Please check the box if your child is able to do the following:
      </Paragraph>
      <QuestionCard
        id={data[10].questionNumber}
        onClick={() => checkboxChange(data[10].questionNumber)}
      >
        <QuestionNumber>{data[10].questionNumber}</QuestionNumber>
        <QuestionText>{data[10].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[10].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[10].questionNumber - 1]}
        />
        <QuestionDescription>{data[10].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[11].questionNumber}
        onClick={() => checkboxChange(data[11].questionNumber)}
      >
        <QuestionNumber>{data[11].questionNumber}</QuestionNumber>
        <QuestionText>{data[11].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[11].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[11].questionNumber - 1]}
        />
        <QuestionDescription>{data[11].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        height="90px"
        id={data[12].questionNumber}
        onClick={() => checkboxChange(data[12].questionNumber)}
      >
        <QuestionNumber>{data[12].questionNumber}</QuestionNumber>
        <QuestionText>{data[12].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[12].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[12].questionNumber - 1]}
        />
        <QuestionDescription>{data[12].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[13].questionNumber}
        onClick={() => checkboxChange(data[13].questionNumber)}
      >
        <QuestionNumber>{data[13].questionNumber}</QuestionNumber>
        <QuestionText>{data[13].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[13].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[13].questionNumber - 1]}
        />
        <QuestionDescription>{data[13].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[14].questionNumber}
        onClick={() => checkboxChange(data[14].questionNumber)}
      >
        <QuestionNumber>{data[14].questionNumber}</QuestionNumber>
        <QuestionText>{data[14].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[14].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[14].questionNumber - 1]}
        />
        <QuestionDescription>{data[14].description}</QuestionDescription>
      </QuestionCard>
      <DivNextPrev>
        <PrevButton
          prevLink="/questionnaire"
          nextButtonClickHandler={nextButtonClickHandler}
        />

        <QuestionCard>
          <QuestionNumber>{data[14].questionNumber}</QuestionNumber>
          <QuestionText>{data[14].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[14].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[14].questionNumber - 1]}
          />
          <QuestionDescription>{data[14].description}</QuestionDescription>
        </QuestionCard>
        <DivNextPrev>
          <PrevButton
            prevLink="/questionnaire"
            nextButtonClickHandler={nextButtonClickHandler}
          />

          {checkedItems.length >= QuestionnaireData[2].limit ? (
            <NextButton
              nextLink="/questionnaire"
              nextButtonClickHandler={nextButtonClickHandler}
            />
          ) : (
              <Popup modal trigger={<NextButton />}>
                {(close) => (
                  <LevelPop
                    close={close}
                    levelScore={LevelData[2].LevelNo}
                    description={LevelData[2].uncompletedMsg}
                    NextLink={LevelData[2].uncompletedAction}
                    No={LevelData[2].LevelNo}
                  />
                )}
              </Popup>
            )}
        </DivNextPrev>
      </QuestionContainer>
    </>
  );

SectionC.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
};

export default SectionC;
