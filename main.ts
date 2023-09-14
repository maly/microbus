const onButtonA = () => {
    basic.showString("A")
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, onButtonA)
basic.forever(function () {
	
})
