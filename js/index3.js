const handlerOverlayClick = (popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup)
    }
  })
}

const handlerEscButton = (event) => {
  console.log(event)
  if (event.keyCode === 27) {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup);
  }
}
