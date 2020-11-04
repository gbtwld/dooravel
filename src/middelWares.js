import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2",
});

const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-doo/img",
  }),
});

export const uploadThumbnail = multerImage.single("imageFile");

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "Dooravel";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
