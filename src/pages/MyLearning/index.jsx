import React, { useEffect, useState } from 'react';
import callApi from '~/api/axiosConfig';
import { GET_TOP_USER_ENDPOINT } from '~/constants/my_const';
import { useAuth } from '~/hooks';

function MyLearning() {
  const { user } = useAuth();

  const [list, setList] = useState([]);
  useEffect(() => {
    const init = async () => {
      const response = await callApi({ path: GET_TOP_USER_ENDPOINT, params: { page: 1, size: 3 } });
      const paged = response.result;

      setList(paged.items);
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
