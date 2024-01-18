import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const uploadFolderImages = async (folder, category) => {
  const files = fs.readdirSync(folder);
  console.log(`uploading ${category}......`);
  try {
    for (let file of files) {
      const filePath = path.join(folder, file);
      console.log(file);

      file = file.replace(".jpg", "");

      const response = await cloudinary.uploader.upload(filePath, {
        folder: "MensTribe",
        public_id: file,
        overwrite: true,
      });
    }
  } catch (error) {
    console.log(error);
  }

  console.log(`\n**** Finished uploading ${category} \n\n`);
};

await uploadFolderImages("../../ProductAssets/accessories", "Accessories");
await uploadFolderImages("../../ProductAssets/bottoms", "bottoms");
await uploadFolderImages("../../ProductAssets/denim", "denim");
await uploadFolderImages("../../ProductAssets/footwear", "footwear");
await uploadFolderImages("../../ProductAssets/knits", "knits");
await uploadFolderImages("../../ProductAssets/outwear", "outwear");
await uploadFolderImages("../../ProductAssets/shirt", "shirt");
await uploadFolderImages("../../ProductAssets/sweater", "sweater");
