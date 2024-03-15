const PopupView = ({ close, user, userPosts }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0 ">
      <div className="w-3/4 max-[600px] bg-gray-800 p-5 rounded-md ">
        <div className="flex items-center justify-between">
          <h4>
            <span className="capitalize text-yellow-500 font-bold">{user}</span>{" "}
            Kullanıcısının Gönderileri
          </h4>
          <button className=" bg-gray-900 p-2 rounded-md" onClick={close}>
            Kapat
          </button>
        </div>

        {userPosts.length === 0 ? (
          <p>Yükleniyor</p>
        ) : (
          userPosts.map((post) => (
            <div key={post.id} className=" bg-black rounded-md my-4 p-3">
              <h2 className=" font-bold">{post.title}</h2>
              <p className="line-clamp-6">{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
