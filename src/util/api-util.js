import $ from 'jquery';

export const confirmSession = token => {
  return $.ajax({
    url: `http://localhost:3002/api/confirm-session?token=${token}`,
    method: 'GET'
  })
}