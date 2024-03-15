import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListControler = () => {
  const model = new ListModel();
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListControler;
