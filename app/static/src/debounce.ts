import React from 'react';

export default function debounce(func: Function, wait: number) {

  console.log('hii')

  func()
  // should wait according to wait param to call the function
  // setTimeout(func(), wait);

  // clearTimeout to prevent the setTimeout to execute
  // clearTimeout()
}