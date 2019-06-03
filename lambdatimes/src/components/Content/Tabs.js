import React from 'react';
import Tab from './Tab';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TabsTopicsTitle = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`


// styled component base
const TabsSC = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`


const Tabs = props => {
  return (
    <TabsSC>
      <TabsTopics>
        <TabsTopicsTitle>TRENDING TOPICS:</TabsTopicsTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => {
          return (
            <Tab
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab} tab={tab}
              key={Math.floor(Math.random() * 1000)}
            />
          )
        })}
      </TabsTopics>
    </TabsSC>
  );
};

// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedTab: PropTypes.string.isRequired
}
export default Tabs;
