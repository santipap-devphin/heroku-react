import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Tag,
  Select,
  Button,
  Upload,
  message,
  Avatar,
  DatePicker,
  Row,
  Col,
} from 'antd';
import axios from 'axios';
import moment from 'moment';
import { LoadingOutlined, PlusOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import Layout from '../../containers/Layout';
import { Card, SelectMultiple } from '../../commons';
import { Editor } from '../../components';
import { group, categories }  from '../../mock/data';
import Recentpost from './recent';
import Swal from 'sweetalert2';
const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const toDataURLs = url => fetch(url)
.then(response => response.blob())
.then(blob => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onloadend = () => resolve(reader.result)
  reader.onerror = reject
  reader.readAsDataURL(blob)
}))

function getBase64(img, callback) {
  const reader = new FileReader();

 
  reader.addEventListener('load', () => 

 
  callback(reader.result)
  
  );
  
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}






/* eslint-enable no-template-curly-in-string */

const AddContent = () => {
  const [form] = Form.useForm();
  const [toDo, onToDo] = useState([]);
  const [toDoDataUser, onToDoDataUser] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [editor, setEditor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(false);
  const [testimg, settestimg] = useState("");
  
  const [locate , setLocate] = useState("");
  const [imglocate , setImglocate] = useState(false);
  const [imgdelay , setimgdelay] = useState(false);
  const [objs , setObjs] = useState([]);
  const [theArray, setTheArray] = useState([]);
  //const [imgC, setimgC] = useState("");
  var imgc = "";
 


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then(resp => {
      onToDo(state => {
        return resp.data.map(({ id, title }) => ({ id, label: title }));
      });
    });
  }, []);
  

  function ResizeImage (files, uploadHandler) {
    const uploadFile = files[0];
    var nfile = "";
    const img = document.createElement('img');
    
    //img.setAttribute("id", "img12");
    const canvas = document.createElement('canvas');
    const reader = new FileReader();
  
    reader.onload = function (e) {

       //console.log(getBase64Image(e.target.result))
        //img.id = "img1";
        //img.src = 'https://zio666.com/endpoint_content/images_content/2021-11-11%2011:27:47Dani%20Alves.jpg';
        
        img.src = e.target.result;
       
        
        

        //document.getElementsByClassName("sun-editor").appendChild(img)
        
        //canvas.appendChild(img);
        img.onload = function () {

            //img.setAttribute("id","img1");
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
  
            const MAX_WIDTH = 600;
            const MAX_HEIGHT = 300;
            let width = img.width;
            let height = img.height;
  
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
  
            canvas.width = width;
            canvas.height = height;
  
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
  
            //console.log(e.target.result)
            //console.log(uploadFile)

           canvas.toBlob(function (blob) {
                uploadHandler([new File([blob], uploadFile.name)])
            }, uploadFile.type, 1);
  
  
            
           
  

        }
        //document.getElementsByClassName("sun-editor")[0].appendChild(img);

        //e.target.append(appendText);
       
    }

            let formDatas = new FormData();
   
            
            formDatas.append("fileimg", uploadFile); 
           

            axios({
              method: 'post',
              url: 'https://zio666.com/endpoint_content/upload_img_content.php',
              data: formDatas,
              //dataType:'json',
              config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then(function (response) {

                  var newimg  = "";
                
                 /* document.getElementsByClassName("se-loading-box")[0].style = "display:none";
                  //handle success
                  const imgs = document.createElement('img');
                  imgs.src = "https://zio666.com/endpoint_content/"+response.data;
               

                  document.getElementsByClassName("se-wrapper-inner se-wrapper-wysiwyg")[0].appendChild(imgs);*/
                  //objectt.push("https://zio666.com/endpoint_content/"+response.data);
                  //setTheArray(oldArray => [...oldArray, "https://zio666.com/endpoint_content/"+response.data]);
                  
                  newimg = "https://zio666.com/endpoint_content/"+response.data;

                  imgc = newimg;
                    
                  
                  
                  

                 // setObjs(objectt);
                 // 
                  
                  
                 setTimeout(function(){
                   
                  reader.readAsDataURL(uploadFile);
                
                }, 1500);


                 
                  


    
              })
              .catch(function (response) {
                  //handle error
                  console.log(response)
              });
      
     // console.log(nfile)
    
     /* console.log(imgdelay);

      if(imgdelay != false){

        console.log(nfile);

        reader.readAsDataURL(uploadFile);

      }*/
  
     
      //setTimeout(function(){ }, 500);

    
    
  
    //console.log(uploadFile)
  
    //reader.readAsDataURL(uploadFile);
  }

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos/").then(resp => {
  //     onToDoDataUser(state => {
  //       return resp.data
  //         .slice(0, 5)
  //         .map(({ id, title }) => ({ id, label: title }));
  //     });
  //   });
  // }, []);

  


  /*toDataURLs('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
  .then(dataUrl => {

    settestimg(dataUrl);
    console.log('RESULT:', dataUrl)
  })*/


  const handleChangePhoto = async (info) => {

    
    if (info.file.status === 'uploading') {
      let formData = new FormData();
      let req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        if (req.readyState == XMLHttpRequest.DONE) {
                setLocate(req.responseText);
                setImglocate(true);
        }
      }
      formData.append("fileimg", info.file.originFileObj); 
      req.open("POST", 'https://zio666.com/endpoint_content/upload_image.php');
      req.send(formData);
     
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      await getBase64(info.file.originFileObj, (avartar) => {


           setImageUrl(avartar);
     });
    }
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
       
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = (values) => {


    
        //values.post_content = 
        //console.log(editor)
      

        if(imglocate != false){

          var strweb  = "";
          var newstrweb;
  
          if(values.website.length > 0){
  
            for(var i = 0; i < values.website.length; i++){
  
                  strweb +=  values.website[i].id +"_"+ values.website[i].label+","
  
            }
  
  
            newstrweb = strweb.slice(0, -1);
  
          }
  
  
          var tagss = "";
          var lasttags;
  
          if(values.wptag.length > 0){
  
                for(var i = 0; i < values.wptag.length; i++){
  
                  tagss +=  values.wptag[i] +","
  
                }
  
                lasttags = tagss.slice(0, -1);
  
           }
  
          
          let formData = new FormData();
          formData.append('p_title', values.post_title)
          formData.append('p_content', editor)
          formData.append('p_website', newstrweb)
          formData.append('p_categories', values.categories)
          formData.append('p_tags', lasttags)
          formData.append('p_feature_image',locate)
          formData.append('publishDate',date)
  
          axios({
            method: 'post',
            url: 'https://zio666.com/endpoint_content/insert_content.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                
                if(response.data.code == 1){

                 
                     
                      Swal.fire({
                        title: 'เพิ่มข้อมูลเรียบร้อบ',
                        text: "",
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK'
                      }).then((result) => {
                        if (result.isConfirmed) {

                                location.reload();

                        }
                      })

                }
                else if(response.data.code == 3){

                 
                  Swal.fire({
                    title: 'เพิ่มข้อมูลเรียบร้อบ',
                    text: "",
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                  }).then((result) => {
                    if (result.isConfirmed) {

                            location.reload();

                    }
                  })

                }
                else{

                        Swal.fire(
                          'ไม่สามารถเพิ่มข้อมูลได้',
                          'กรุณาลองใหม่',
                          'error'
                        )

                }
  
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });


        }
        else{

                Swal.fire(
                  'กรุณารอสักครู่',
                  'รอสัก 30 วินาทีแล้วกดใหม่',
                  'error'
                )

        }

       
          

      // form.resetFields();
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onBlur = () => {
    console.log('blur');
  }

  const onFocus = () => {
    console.log('focus');
  }

  const onSearch = (val) => {
    console.log('search:', val);
  }

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    console.log(onClose);
    return (
      <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3  , color:"black"}}>
        {label}
      </Tag>
    );
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const options = [
    { value: 'ฟุตบอล' },
    { value: 'Barcelona' },
    { value: 'Paul Pogba' },
    { value: 'sbobet news' }
  ];

  const disabledDate = (current) => {
    // Can not select days before today and today
    const start = new Date();
    return current && current < start.setDate(start.getDate() - 1);
  }

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      //console.log(file);
      onSuccess('okasdasdasd');
    }, 0);
  };

  const handleChangeEditor = (content) => 
  {
      //console.log(content)
    setEditor(content);
  }

  const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
   
   
        
          setTimeout(function(){
                        
            console.log(editor)
            imageInfo.src = imgc;
            targetImgElement.src = imgc;
           
            //console.log(targetImgElement);
            //console.log(imageInfo);
                
          }, 500);

   
      

   
    
   

 
           
  };
      
  const imageUploadhttps = (xmlHttpRequest, info, core) => {
    
              //console.log(xmlHttpRequest, info, core)
  };
  const handleImageUploadBefore = (files, info , uploadHandler) => {
      //console.log(uploadHandler)
          try {

            ResizeImage(files, uploadHandler)
            

        } catch (err) {
            uploadHandler(err.toString())
        }
    
 };

  const onChangeSelectMultiple = (val) => onToDoDataUser(val);

  const onChangeDatePicker = (date, dateString) => {
    //console.log("date", dateString);
    var revert = dateString.split("/");
    var newre = revert[2]+"-"+revert[1]+"-"+revert[0];
    setDate(newre);
  };

  

  return (
    <Layout>
      <Card>
        <Form
          form={form}
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
        <div><img src={testimg}/></div>        
<Row gutter={[16, 16]} className="mb-4">
          <Col xs={24} sm={12} md={16} lg={16} xl={16}>
              <Form.Item
                name={'post_title'}
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter title',
                  },
                ]}
              >
                <Input />

                
              </Form.Item>


                 <Form.Item
                label="Content"
                name='post_content'
                rules={[
                  {
                    required: true,
                    message: 'Please enter content of post',
                  },
                ]}
              >
                <Editor
                  onChange={handleChangeEditor}
                  ImageUpload = {handleImageUpload}
                  ImageUploadBefore = {handleImageUploadBefore}
                  placeholder={"Write something or insert a heart ♥"}
                />
              </Form.Item>
              <Form.Item
                name={'website'}
                label="Website"
                rules={[
                  {
                    required: true,
                    message: 'Please select website',
                  },
                ]}
              >
                <SelectMultiple
                dataBase={toDoDataUser}
                toDos={toDo}
                onChange={onChangeSelectMultiple}
                onSelected={onToDoDataUser}
              />
              </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Form.Item
                name={'categories'}
                label="Categories"
              >
                <Select
                  showSearch
                  placeholder="Select a group"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {
                    categories.map((item) => (
                      <Option value={item.name} key={item.id}>{item.name}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name={'publishDate'}
                label="Publish Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select date',
                  },
                ]}
              >
                <DatePicker
                  allowClear={false}
                  style={{ width: '100%' }}
                  showToday={false}
                  format={["DD/MM/YYYY"]}
                  // dateFormat="dd MMM yyyy"
                  disabledDate={disabledDate}
                  minDate={new Date()}
                  onChange={onChangeDatePicker}
                />
              </Form.Item>
              <Form.Item
                name={'wptag'}
                label="Tag"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  showArrow
                  tagRender={tagRender}
                  style={{ width: '100%' }}
                  options={options}
                />
              </Form.Item>
              <Form.Item
                name={'feature_image'}
                label="Feature image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="อัพโหลดรูปภาพขนาดไม่เกิน 5 MB เท่านั้น"
                rules={[
                  {
                    required: true,
                    message: 'Please images',
                  },
                ]}
              >
                <Upload
                  accept=".jpg, .jpeg, .png"
                  name="feature_image"
                  customRequest={dummyRequest}
                  listType="picture-card"
                  multiple={false}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChangePhoto}
                  onPreview={onPreview}
                // disabled={disableInput}
                >
                 
                 
                  {imageUrl !== '' ? (
                    <Avatar className="w-100" size={248} shape="square" src={imageUrl} />
                     
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Recentpost />  
      </Card>
    </Layout>
  );
}

export default AddContent;
