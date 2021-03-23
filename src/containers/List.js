import React from 'react';
import { connect } from 'react-redux';
import {
  getListData,
  setListData,
  updateListData,
  updListData,
  deleteListData,
} from '../redux/List/ListActionCreators';

const List = (props) => {
  console.log('props', props.list);
  return (
    <div>
      <h1>LIST</h1>
      <div>
        <div>
          <input
            type='text'
            placeholder='Add Task'
            value={props.list.inputText}
            onChange={(e) => props.updateListData(e.target.value)}
          />
          <button
            onClick={() => props.setListData()}
            style={{ marginLeft: '5px' }}
          >
            {props.list.id ? 'Update' : 'ADD'}
          </button>
        </div>
        <div>
          {props.list.error && (
            <span
              style={{
                marginRight: '9%',
                fontSize: '12px',
                color: 'red',
                marginTop: '10px',
              }}
            >
              {props.list.error?.message}
            </span>
          )}
        </div>
      </div>
      <div>
        {props.list.list &&
          props.list.list.map((data) => (
            <div
              key={data.id}
              style={{
                display: 'flex',
                padding: '20px',
                margin: '0.5% 20% 0% 20%',
                backgroundColor: '#0047',
                borderRadius: '5px',
              }}
            >
              <div>{data.name}</div>
              <div style={{ marginLeft: 'auto' }}>
                <button
                  style={{ marginLeft: 'auto', marginRight: '5px' }}
                  onClick={() => props.updListData(data)}
                >
                  Update
                </button>
                <button onClick={() => props.deleteListData(data.id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.ListReducer,
  };
};

const mapDispatchToProps = {
  getListData,
  setListData,
  updateListData,
  deleteListData,
  updListData,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
