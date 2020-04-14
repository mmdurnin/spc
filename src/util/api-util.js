import $ from 'jquery';

export const fetchEvents = () => {
  return $.ajax({
    url: 'http://localhost:3002/api/events',
    method: 'GET'
  });
}

export const addEvent = (event) => {
  const header = localStorage.token;
  console.log(localStorage);
  console.log(localStorage.token);
  console.log(header);
  return $.ajax({
    url: 'http://localhost:3002/api/admin/events',
    method: 'POST',
    data: event,
    headers: {
      token: header
    }
  })
}

export const removeEvent = (key) => {
  const header = localStorage.token;
  return $.ajax({
    url: 'http://localhost:3002/api/admin/events',
    method: 'DELETE',
    data: key,
    headers: {
      token: header
    }
  })
}

export const fetchMailingList = () => {
  return $.ajax({
    url: "/api/admin/mailing_list",
    method: 'GET'
  });
}

export const addEmail = (record) => {
  return $.ajax({
    url: 'http://localhost:3002/api/email',
    method: 'POST',
    data: record
  })
}

export const deleteEmail = (id) => {
  const header = localStorage.token;
  return $.ajax({
    url: 'http://localhost:3002/api/admin/email',
    method: 'DELETE',
    data: id,
    headers: {
      token: header
    }
  })
}