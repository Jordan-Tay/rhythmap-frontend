export const changeAction = (action) => {
  return {
    type: "CHANGEACTION",
    action: action,
  }
}

export const changeClick = (click) => {
  return {
    type: "CHANGECLICK",
    click: click,
  }
}