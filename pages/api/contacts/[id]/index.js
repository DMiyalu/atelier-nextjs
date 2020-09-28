import { contacts } from '../../../../lib/contacts';

export default (req, res) => {
  const { id } = req.query;
  const contact = contacts.find((cont) => cont.id === parseInt(id));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(contact));
};
