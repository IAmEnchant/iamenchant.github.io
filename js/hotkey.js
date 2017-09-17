var hotkey_debug = true;
var hotkey_interval = 2000;
var hotkey_command = "";
var hotkey_timer_id = 0;
var hotkey_allowed = "abcdefghijklmnopqrstuvwxyz1234567890,./!@#$%^&*()-=_+: ";

function hotkey_parse(event) {
	if (hotkey_allowed.indexOf(event.key.toLocaleLowerCase()) > -1)
		hotkey_command += event.key;
	else
		return;
	if (hotkey_lists[hotkey_command])
		location.href = hotkey_lists[hotkey_command];
}

function hotkey_clear() {
	if (hotkey_timer_id !== 0)
		clearTimeout(hotkey_timer_id);
	hotkey_command = "";
	if (hotkey_debug) document.getElementById("command").innerText = hotkey_command;
}

function hotkey_timer() {
	if (hotkey_timer_id !== 0)
		clearTimeout(hotkey_timer_id);
	hotkey_timer_id = setTimeout(hotkey_clear, hotkey_interval);
	if (hotkey_debug) document.getElementById("command").innerText = hotkey_command;
}

function hotkey(event) {
	hotkey_parse(event);
	hotkey_timer();
	if (hotkey_debug) document.getElementById("command").innerText = hotkey_command;
}

document.addEventListener("keyup", hotkey);