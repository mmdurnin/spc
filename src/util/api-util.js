import $ from 'jquery';

export const fetchEvents = () => {
  return $.ajax({
    url: 'http://localhost:3002/api/events',
    method: 'GET'
  });
}

export const addEvent = (event) => {
  return $.ajax({
    url: 'http://localhost:3002/api/admin/events',
    method: 'POST',
    data: event
  })
}