const CTS_MODULE_NAME = 'cycle-token-stack';

function modifySettings()
{
	if (_CycleTokenStack)
	{
		_CycleTokenStack.minClickDelay = game.settings.get(CTS_MODULE_NAME, 'minClickDelay');
		_CycleTokenStack.keyCycleForward = game.settings.get(CTS_MODULE_NAME, 'keyCycleForward');
		_CycleTokenStack.keyCycleBackward = game.settings.get(CTS_MODULE_NAME, 'keyCycleBackward');
	}
}


Hooks.once("init", () => {
	game.settings.register(CTS_MODULE_NAME, 'minClickDelay', {
		name: game.i18n.localize('BBCTS.minClickDelay.title'),
		hint: game.i18n.localize('BBCTS.minClickDelay.hint'),
		scope: 'client',
		config: true,
		default: 300,
		onChange: modifySettings,
		type: Number
	});
	game.settings.register(CTS_MODULE_NAME, 'keyCycleForward',  {
		name: game.i18n.localize('BBCTS.keyCycleForward.title'),
		hint: game.i18n.localize('BBCTS.keyCycleForward.hint'),
		scope: 'client',
		config: true,
		default: '[',
		onChange: modifySettings,
		type: String
	});
	game.settings.register(CTS_MODULE_NAME, 'keyCycleBackward',  {
		name: game.i18n.localize('BBCTS.keyCycleBackward.title'),
		hint: game.i18n.localize('BBCTS.keyCycleBackward.hint'),
		scope: 'client',
		config: true,
		default: ']',
		onChange: modifySettings,
		type: String
	});

	modifySettings();
});