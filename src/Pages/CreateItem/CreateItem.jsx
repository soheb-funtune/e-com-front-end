import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { createSinglePost } from "../../State/home.slice";
const CreateItem = () => {
  const dispatch = useDispatch();
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
      dispatch(createSinglePost(formData));
    }

    console.log({ ImageItem });
  };
  console.log({ backendData });
  return (
    <Wrapper>
      <StyledForm onSubmit={handelSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FlexColDiv>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                // style={{ width: "100%" }}
                value={ImageItem?.name}
                onChange={(e) =>
                  setImageItem({
                    ...ImageItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </FlexColDiv>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FlexColDiv>
              <label>old_price Price :</label>
              <input
                type="text"
                name="old_price"
                value={ImageItem?.old_price}
                onChange={(e) =>
                  setImageItem({
                    ...ImageItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </FlexColDiv>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FlexColDiv>
              <label>new_price Price :</label>
              <input
                rows={10}
                type="text"
                name="new_price"
                value={ImageItem?.new_price}
                onChange={(e) =>
                  setImageItem({
                    ...ImageItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </FlexColDiv>
          </Grid>
          <Grid item xs={12}>
            <FlexColDiv>
              <label>Description :</label>
              <textarea
                rows={5}
                style={{ width: "100%", boxSizing: "border-box" }}
                type="text"
                name="description"
                value={ImageItem?.description}
                onChange={(e) =>
                  setImageItem({
                    ...ImageItem,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </FlexColDiv>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FlexColDiv>
              <label>Select File :</label>

              <InputWrapper style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={{ margin: "0px" }}
                  id="kids"
                  rows={10}
                  type="radio"
                  name="category"
                  value={"kid"}
                  onChange={(e) =>
                    setImageItem({
                      ...ImageItem,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label style={{ margin: "0px" }} htmlFor="kids">
                  Kids
                </label>
                <input
                  style={{ margin: "0px" }}
                  id="men"
                  rows={10}
                  type="radio"
                  name="category"
                  value={"men"}
                  onChange={(e) =>
                    setImageItem({
                      ...ImageItem,
                      [e.target.name]: e.target.value,
                    })
                  }
                />{" "}
                <label style={{ margin: "0px" }} htmlFor="men">
                  Men
                </label>
                <input
                  style={{ margin: "0px" }}
                  id="women"
                  rows={10}
                  type="radio"
                  name="category"
                  value={"women"}
                  onChange={(e) =>
                    setImageItem({
                      ...ImageItem,
                      [e.target.name]: e.target.value,
                    })
                  }
                />{" "}
                <label style={{ margin: "0px" }} htmlFor="women">
                  Women
                </label>
              </InputWrapper>
            </FlexColDiv>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FlexColDiv>
              <label>Select File :</label>
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
            </FlexColDiv>
          </Grid>
          <Grid item xs={12}>
            <button
              style={{
                padding: "15px 30px",
                background: "green",
                color: "white",
                border: "none",
                fontWeight: "30px",
                colSpan: "3 !important",
              }}
              type="submit"
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </StyledForm>
    </Wrapper>
  );
};

export default CreateItem;

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 767px) {
    margin-top: 0px;
  } */
`;
const StyledForm = styled.form`
  padding: 30px;
  input[type="text"] {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    width: -webkit-fill-available;
    height: 43px;
  }
  label {
    float: left;
  }
  /* display: grid;
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  min-width: 50%;
  height: max-content;
  
  background-color: #f3f3f3;
  @media (max-width: 767px) {
    background-color: #ffff;
  } */
`;
const InputWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
  input[type="text"] {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    width: -webkit-fill-available;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  /* column-span: ${({ colSpan }) => (colSpan ? colSpan : 1)} !important; */
  box-sizing: border-box;
  /* gap: 20px; */
  align-items: flex-start;
  input[type="text"] {
    width: 100%;
    padding: 5px;
    height: 43px;
    box-sizing: border-box;
  }
`;
const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  align-items: flex-start;
`;
