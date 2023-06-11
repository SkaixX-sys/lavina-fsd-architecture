import { Col } from "react-bootstrap";
import {footerCol} from './FooterCol.module.css'
import FooterSectionNav from './../FooterSectionNav/FooterSectionNav';
import FooterNavItems from './../../service/FooterNavItems';

const FooterCol = ({ link, text, items }) => {
  return (
    <Col xs={2} className={footerCol}>
      <FooterSectionNav link={link} text={text} />
      <FooterNavItems items={items} />
    </Col>
  );
};

export default FooterCol;
