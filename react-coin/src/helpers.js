import React from 'react';


// fetch error helper

// @param {object} response

export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
}

// render change % helper
// @param {string} percent

export const renderChangePercent = (percent) => {
    if (percent > 0){
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &uarr;</span>
    } else {
      return <span>{percent}</span>
    }

  }