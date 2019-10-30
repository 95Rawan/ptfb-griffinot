/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
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
import PrevButton from '../../CommonComponents/PrevButton';
import NextButton from '../../CommonComponents/NextButton';

const SectionD2 = ({
  checkboxChange,
  checkedQuestions,
  checkedItems,
  nextButtonClickHandler,
}) => (
  <>
    <QuestionContainer>
      <Paragraph>
        Please check the box if your child is able to do the following:
      </Paragraph>
      <QuestionCard
        id={data[20].questionNumber}
        onClick={() => checkboxChange(data[20].questionNumber)}
      >
        <QuestionNumber>{data[20].questionNumber}</QuestionNumber>
        <QuestionText>{data[20].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[20].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[20].questionNumber - 1]}
        />
        <QuestionDescription>{data[20].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        height="90px"
        id={data[21].questionNumber}
        onClick={() => checkboxChange(data[21].questionNumber)}
      >
        <QuestionNumber>{data[21].questionNumber}</QuestionNumber>
        <QuestionText>{data[21].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[21].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[21].questionNumber - 1]}
        />
        <QuestionDescription>{data[21].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[22].questionNumber}
        onClick={() => checkboxChange(data[22].questionNumber)}
      >
        <QuestionNumber>{data[22].questionNumber}</QuestionNumber>
        <QuestionText>{data[22].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[22].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[22].questionNumber - 1]}
        />
        <QuestionDescription>{data[22].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[23].questionNumber}
        onClick={() => checkboxChange(data[23].questionNumber)}
      >
        <QuestionNumber>{data[23].questionNumber}</QuestionNumber>
        <QuestionText>{data[23].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[23].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[23].questionNumber - 1]}
        />
        <QuestionDescription>{data[23].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[24].questionNumber}
        onClick={() => checkboxChange(data[24].questionNumber)}
      >
        <QuestionNumber>{data[24].questionNumber}</QuestionNumber>
        <QuestionText>{data[24].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[24].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[24].questionNumber - 1]}
        />
        <QuestionDescription>{data[24].description}</QuestionDescription>
      </QuestionCard>
      <DivNextPrev>
        <PrevButton
          prevLink="/questionnaire"
          nextButtonClickHandler={nextButtonClickHandler}
        />

          {checkedItems.length === QuestionnaireData[5].limit ? (
            <Popup modal trigger={<NextButton />}>
              {(close) => (
                <PopupPage
                  close={close}
                  description="Our programme will be too simple for your child and we would not recommend it.  It is likely your child doesn’t need extra support with developing their fine motor skills."
                  NextLink="/"
                />
              )}
            </Popup>
          ) : (
              <Popup modal trigger={<NextButton />}>
                {(close) => (
                  <LevelPop
                    close={close}
                    levelScore={LevelData[5].LevelNo}
                    description={LevelData[5].uncompletedMsg}
                    NextLink={LevelData[5].uncompletedAction}
                    No={LevelData[5].LevelNo}
                  />
                )}
              </Popup>
            )}
        </DivNextPrev>
      </QuestionContainer>
    </>
  );

SectionD2.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number]))
    .isRequired,
};

export default SectionD2;
