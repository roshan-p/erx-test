import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import parse from 'html-react-parser';
import moment from 'moment';
import getBlog from "../../actions/blogList/index";
import * as S from "./listBlog.styled";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(async () => {
    setBlogData(await getBlog());
  }, []);
  return (
    <Container>
     {blogData&& <Row>
        {blogData.map((item,index) => (
          <Col xs="12" sm="12" md="6" lg="4" key={index}>
            <S.StyledCard

            >
              <Card.Img
                variant="top"
                src={item?.imageUrl ||"https://dummyimage.com/200x160/000/fff"}
              />
              <Card.Body>
                <S.DateLabel>{moment(1620445928297).format('MMMM D, YYYY')}</S.DateLabel>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>{parse(item?.description)}</Card.Text>
              </Card.Body>

              <S.Link className="float-right" href="#">
                Continue Reading <S.ContinueReadingIcon />
              </S.Link>
            </S.StyledCard>
          </Col>
        ))}
      </Row>}
    </Container>
  );
};

export default BlogList;
