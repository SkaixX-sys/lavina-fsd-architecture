import FooterNav from "../ui/FooterNav/FooterNav";

const FooterNavItems = ({ items }) => {
  return items.map((item, index) => (
    <div key={index}>
      <FooterNav link={item.link} text={item.text} />
    </div>
  ));
};

export default FooterNavItems;
