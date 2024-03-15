import PopupController from "../../components/Popup/PopupController";

const ListView = ({
  posts,
  setSelectedUser,
  selectedUser,
  setPostId,
  deletePost,
}) => {
  return (
    <div className="   container-sm  px-5 md:pX-36 lg:px-52  py-5 ">
      <h1>
        Gönderi Sayısı: <span className="font-bold">{posts.length}</span>{" "}
      </h1>

      <div>
        {posts.length === 0 ? (
          <p>Yükleniyor</p>
        ) : (
          posts.map((post) => (
            <div
              className="post bg-black w-full my-5 p-5 rounded-md shadow shadow-gray-400 cursor-pointer transition hover:shadow-yellow-300"
              key={post.id}
            >
              <div className="flex items-center  justify-between">
                <h3>{post.title}</h3>
                <p
                  onClick={() => {
                    setSelectedUser(post.user);
                  }}
                  className="text-yellow-500 capitalize "
                >
                  {post.user}
                </p>
              </div>
              <p className="mt-5">{post.text}</p>
              {/* <button
                onClick={() => {}}
                className="border border-red-500 rounded-md flex self-end px-4 mt-1 hover:bg-red-500 invisible outline-none"
              >
                Sil
              </button> */}
            </div>
          ))
        )}
      </div>

      {selectedUser && (
        <PopupController
          close={() => setSelectedUser(null)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default ListView;
