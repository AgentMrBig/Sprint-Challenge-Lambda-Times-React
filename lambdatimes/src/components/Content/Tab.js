import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabNotActive = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
`
const TabActive = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if (props.tab === props.selectedTab) {
    return (
      <TabActive onClick={() => { props.selectTabHandler(props.tab) }}>
        {props.tab.toUpperCase()}
      </TabActive>
    )
  } else {
    return (
      <TabNotActive onClick={() => { props.selectTabHandler(props.tab) }}>
        {props.tab.toUpperCase()}
      </TabNotActive>
    )
  }
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default Tab;
