export const fileUpload = async (file) => {
  // if (!file) throw new Error("No tenemos nbingun archivo a subir");
  if(!file) return null
  const cloudUrl = "https://api.cloudinary.com/v1_1/dqatq9qq4/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir imagen");

    const cloudResponse = await resp.json();
    return cloudResponse.secure_url;
  } catch (error) {
    // console.log(error);
    // throw new Error(error.message);}
   return null
  }
};
