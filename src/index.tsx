import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { http, get, post, put } from './fetchData';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const App = () => {
  const [responseData, setResponseData] = useState<Todo[]>();
  useEffect(() => {
    const getData = async () => {
      const response = await get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos',
        { method: 'get' }
      );
      console.log(response.parsedBody);
      setResponseData(response.parsedBody);
    };
    const postData = async () => {
      const postResponse = await post<{ id: number }>(
        'https://jsonplaceholder.typicode.com/posts',
        { title: 'test', body: 'body test' }
      );
      console.log(postResponse);
    };
    postData();
  }, []);
  return <div></div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
