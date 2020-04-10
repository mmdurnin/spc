import $ from 'jquery';

export const fetchEvents = () => {
  return $.ajax({
    url: 'http://localhost:3002/api/events',
    method: 'GET'
  });
}