import { LoadingOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { testActionCreator } from 'store/actions';

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App({ test, dispatch }) {
  const handleClick = (e) => {
    dispatch(testActionCreator('change!'));
  };
  return (
    <Router>
      <Suspense fallback={<Spin indicator={antIcon} />}>
        <div className="App">
          <p>{test}</p>
          <Button type="primary" onClick={handleClick}>
            点击
          </Button>
        </div>
      </Suspense>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
