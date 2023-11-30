import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dqatq9qq4",
  api_key: "142595637579785",
  api_secret: "YjqWJ82nIsS5W52YL4RcSEIdeTc",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamentea cloudinary", async () => {
    const imgUrl =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
    const resp = await fetch(imgUrl);
    const blob = await resp.blob();

    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imagedId = segments[segments.length - 1].replace(".png", "");
    const cloudResponse = await cloudinary.api.delete_resources(
      ["journal-app/" + imagedId],
      {
        resource_type: "image",
      }
    );

    //console.log(cloudResponse);
  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
