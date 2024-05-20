import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react'

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjEwNDc0ZTliMTZhM2M0YzE3YzU0OTEiLCJpYXQiOjE3MTIzNDI4NjIsImV4cCI6MjAyNzkxODg2Mn0.QsbIo5FswG4qz9DFALXBDZnVrxzBaQ2EeUbNglMbl1I" />
    </>
  );
}
