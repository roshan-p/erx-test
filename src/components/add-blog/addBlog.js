import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { MdSave, MdNotificationsOff } from "react-icons/md";
import postBlog from "../../actions/addBlog/index";
import * as S from "./addBlog.styled";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setValidTitle(false);
    }
    if (!description) {
      setValidDescription(false);
    }
    if (title && description) {
      let data = {
        title,
        description,
        imageUrl,
      };
      try {
        let addData = await postBlog(data);
        setTitle("");
        setDescription("");
        setImageUrl("");
        if (addData) {
          setShowModal(true);
          setModalMessage("Data has been saved successfully");
        }
      } catch (err) {
        if (err) {
          setShowModal(true);
          setModalMessage("Error! data not saved");
        }
      }
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };
  return (
    <S.Container>
      <S.Title column="lg" lg={2}>
        Add New Blog
      </S.Title>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <S.Label>New Post</S.Label>
          </Col>
          <Col>
            <S.Button variant="blue" type="submit">
              <MdSave /> Save
            </S.Button>{" "}
            <S.Button variant="light" disabled>
              <MdNotificationsOff /> Publish
            </S.Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <S.Label>Enter Title</S.Label>
            <S.TextInput
              validTitle={validTitle}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setValidTitle(true);
              }}
              placeholder="Title"
            />
            {!validTitle && <S.ErrorSpan>Title is required</S.ErrorSpan>}
          </Col>
          <Col>
            <S.Label>Image</S.Label>
            <S.ImageInput
              value={imageUrl}
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
              placeholder="Enter Image Url"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col column="lg" lg={6}>
            <S.DecriptionContainer>
              <S.Label>Description</S.Label>
              <S.TextArea
                value={description}
                validDescription={validDescription}
                onChange={(event) => {
                  setDescription(event.target.value);
                  setValidDescription(true);
                }}
                rows={3}
                type="text"
                placeholder="Enter Description"
              />
              {!validDescription && (
                <S.ErrorSpan>Description is required</S.ErrorSpan>
              )}
            </S.DecriptionContainer>
          </Col>
        </Row>
      </form>
      <Modal
        show={showModal}
        onHide={() => {
          onCloseModal();
        }}
      >
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <S.Button
            variant="blue"
            onClick={() => {
              onCloseModal();
            }}
          >
            OK
          </S.Button>
        </Modal.Footer>
      </Modal>
    </S.Container>
  );
};

export default AddBlog;
