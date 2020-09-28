import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default function Index(props) {
  return (
    <>
      <h1>Liste des contacts</h1>
      {props.contacts.map(({ id, fname, lname }) => (
        <p key={id}>
          <Link href={`/contacts/${id}`}>{fname + ' ' + lname}</Link>
        </p>
      ))}
    </>
  );
}

Index.getInitialProps = async () => {
  const reponse = await fetch('http://localhost:3000/api/contacts');
  const contacts = await reponse.json();
  console.log(contacts);
  return {
    contacts,
  };
};
