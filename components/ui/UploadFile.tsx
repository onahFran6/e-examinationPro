"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface UploadFileProps {
  setFileUrl: React.Dispatch<React.SetStateAction<string>>;
  setAnswerTypes: React.Dispatch<React.SetStateAction<string>>;
}

const UploadFile: React.FC<UploadFileProps> = ({
  setFileUrl,
  setAnswerTypes,
}) => {
  const theme = useTheme();
  return (
    <div>
      <CldUploadWidget
        uploadPreset="nye6kgv3"
        onSuccess={(result, { widget }) => {
          console.log("===>>>> result", { result });
          const fileurl = result?.info as any;
          setAnswerTypes("fileUpload");
          setFileUrl(fileurl?.secure_url as string);
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setFileUrl("");
            open();
          }
          return (
            <Button
              variant="outlined"
              // color="secondary"
              onClick={handleOnClick}
              size="small"
              sx={{
                paddingY: 0,
                marginY: 0,
                fontWeight: "bold",
                borderColor: "blue",
                padding: "4px",
                color: theme.palette.background.default,
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  bgcolor: theme.palette.primary.light,
                },
              }}
            >
              or Upload Answer
            </Button>
          );
          //   <button onClick={handleOnClick}></button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadFile;
