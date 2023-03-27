import FileDownload from "js-file-download";
import AWS from 'aws-sdk';


AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_ID_POOL
  })
});

const s3 = new AWS.S3();

export const handleDownload = (props) => {
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET,
        Key: props
      };
      s3.getObject(params, (err, data) => {
        if (err) console.error(err);    
        const propsArr = props.split('/');
        const filename = propsArr[propsArr.length - 1];
        const extension = filename.split('.')[1];  
        
        const file = new Blob([data.Body], { type: data.ContentType });
        //const fileURL = URL.createObjectURL(file);
        //window.open(fileURL);
        FileDownload(file, `${filename}.${extension}`)
      });
    };



