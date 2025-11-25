import React, { useEffect, useState } from 'react';
import callApi from '~/api/axiosConfig';
import { GET_USER_LIST_ENDPOINT } from '~/constants/my_const';
import { useAuth } from '~/hooks';

function MyLearning() {
  const { user } = useAuth();

  const [list, setList] = useState([]);
  useEffect(() => {
    const init = async () => {
      const response = await callApi({ path: GET_USER_LIST_ENDPOINT, method: 'POST', data: {} });
      const pageResult = response.result;
      console.log(pageResult);

      setList(pageResult.items);
    };
    init();
  }, []);
  return (
    <>
      <div>MyLearning</div>
      <p>ADMIN: {user.userName}</p>
      {list.map((u, index) => (
        <p key={index}>{u.userName}</p>
      ))}
    </>
  );
}

export default MyLearning;
