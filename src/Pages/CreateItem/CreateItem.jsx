import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CreateItem = () => {
  const [ImageItem, setImageItem] = useState();
  const [backendData, setBackendData] = useState();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (
      ImageItem?.image &&
      ImageItem?.name &&
      ImageItem?.description &&
      ImageItem?.old_price &&
      ImageItem?.new_price &&
      ImageItem?.category
    ) {
      formData.set("image", ImageItem?.image);
      formData.set("name", ImageItem?.name);
      formData.set("description", ImageItem?.description);
      formData.set("old_price", ImageItem?.old_price);
      formData.set("new_price", ImageItem?.new_price);
      formData.set("category", ImageItem?.category);
      await axios
        .post("http://localhost:4000/create", formData)
        .then((res) => res.data)
        .then((res) => {
          alert("Submitted Successfylly !");
          setBackendData(res);
        })
        .catch((err) => console.error(err));
    }

    console.log({ ImageItem });
  };
  console.log({ backendData });
  return (
    <Wrapper>
      <StyledForm onSubmit={handelSubmit}>
        <FlexCol>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            style={{ width: "100%" }}
            value={ImageItem?.name}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />
        </FlexCol>
        <FlexCol>
          <label>Description :</label>
          <textarea
            rows={10}
            style={{ width: "100%" }}
            type="text"
            name="description"
            value={ImageItem?.description}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />
        </FlexCol>
        <FlexCol>
          <label>old_price Price :</label>
          <input
            rows={10}
            type="text"
            name="old_price"
            value={ImageItem?.old_price}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />
        </FlexCol>
        <FlexCol>
          <label>new_price Price :</label>
          <input
            rows={10}
            type="text"
            name="new_price"
            value={ImageItem?.new_price}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />
        </FlexCol>
        <InputWrapper>
          <input
            id="kids"
            rows={10}
            type="radio"
            name="category"
            value={"kid"}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="kids">Kids</label>
          <input
            id="men"
            rows={10}
            type="radio"
            name="category"
            value={"men"}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />{" "}
          <label htmlFor="men">Men</label>
          <input
            id="women"
            rows={10}
            type="radio"
            name="category"
            value={"women"}
            onChange={(e) =>
              setImageItem({ ...ImageItem, [e.target.name]: e.target.value })
            }
          />{" "}
          <label htmlFor="women">Women</label>
        </InputWrapper>
        <FlexCol>
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setImageItem({ ...ImageItem, image: e.target.files[0] })
            }
          />
          <InputWrapper>
            {/* {backendData?.image && (
              <img
                src={`${backendData?.image}`}
                style={{ width: "auto", height: "100px" }}
                alt="backend-image"
              />
            )}{" "} */}
            {ImageItem?.image && (
              <img
                src={URL.createObjectURL(ImageItem?.image)}
                style={{ width: "auto", height: "100px" }}
              />
            )}{" "}
          </InputWrapper>
        </FlexCol>
        <button style={{ padding: "20px" }} type="submit">
          Submit
        </button>
      </StyledForm>
    </Wrapper>
  );
};

export default CreateItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 767px) {
    margin-top: 0px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 50%;
  height: max-content;
  padding: 30px;
  background-color: #f3f3f3;
  @media (max-width: 767px) {
    background-color: #ffff;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  input[type="text"] {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  input[type="text"] {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
`;
