import React from "react";

const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-10 w-3/4 max-w-[700px] md:p-10 bg-black p-10 rounded-lg"
      >
        <h1 className=" text-center text-xl">Yeni Gönderi Oluştur</h1>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium ">Kullanıcı Adı</label>
          <input
            className=" bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-blue-400 p-2.5 w-full"
            name="user"
            type="text"
            required
            placeholder="örn:Mehmet"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium ">Konu Başlığı</label>
          <input
            className=" bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-blue-400 p-2.5 w-full"
            name="title"
            type="text"
            required
            placeholder="örn:React'ta sorun yaşıyorum"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium ">Konu</label>
          <textarea
            className=" max-h-[300px] min-h-[150px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-blue-400 p-2.5 w-full"
            name="text"
            type="text"
            required
            placeholder="..."
          />
        </div>

        <button
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
          type="submit"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateView;
