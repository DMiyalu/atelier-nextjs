import React from 'react';
import fetch from 'isomorphic-unfetch';

export default function Index(props) {
  return (
    <>
      <h1>{props.contact.fname}</h1>
      <p>
        <b>ID : {props.contact.id} </b>
      </p>
      <p>
        <b>Nom : {props.contact.lname} </b>
      </p>
      <p>
        <b>Prénom : {props.contact.fname} </b>
      </p>
    </>
  );
}

Index.getInitialProps = async (context) => {
  const { id } = context.query;
  const reponse = await fetch(`http://localhost:3000/api/contacts/${id}`);
  const contact = await reponse.json();
  console.log(contact);
  return {
    contact,
  };
};
