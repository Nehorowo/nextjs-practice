import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UsersPhotosPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UsersPhotosPage photoId: {photoId}, id: {id}
    </div>
  );
};

export default UsersPhotosPage;
