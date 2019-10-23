import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { PrevBtn ,DivPrev} from './index.style';

const PrevButton = ({ prevLink, nextButtonClickHandler }) => (
  <>
    <DivPrev>
      <PrevBtn to={prevLink} type="primary" name="prevBtn" onClick={nextButtonClickHandler}>
        <Icon type="double-left" />
        Prev
      </PrevBtn>
    </DivPrev>
  </>
);

PrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default PrevButton;
