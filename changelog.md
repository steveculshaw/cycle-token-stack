# CHANGELOG

## [0.6.2] 2023-06-21

- **IMPORTANT:** This is just a point release to show module is v11 compatibility.

## [0.6.1] 2023-06-05

- **IMPORTANT:** This is just a point release to show module is v10 compatibility.

### BUGFIXES

- None

## [0.5.4] 2020-08-18

### BUGFIXES

- **IMPORTANT:** Fixed huge memory and resource consumption at the loss of some functionality. Worth it.
- Removed tooltips

## [0.5.3] 2020-08-11

### BUGFIXES

- Improved performance of module.

## [0.5.0] 2020-07-27

### ADDED

- Changed hotkeys to move hovered token all the way to the top or bottom of stack.
- Added ability for player to move above or below non-controllable tokens using hotkeys.
- Retains stack position between sessions or after refresh (F5) -- GM settings are retained.
- Allow GM to push his stack state to player machines.

### BUGFIXES

- Tokens on player machine would not cycle properly, if at all.
- Resetting token stacks on player machine did nothing.
- Reworked event handling so cycling and tooltips behave more often.

## [0.4.2] 2020-07-26

### BUGFIXES

- Tooltips were showing for all tokens after init of world.
- Tooltip would stick around when character sheet opened.

## [0.4.1] 2020-07-25

### ADDED

- Ability to push a token to behind other tokens in stack with keystroke.
- Reworked code for more consistent tooltip and mouse-click behaviour.

### BUGFIXES

- Keyboard shortcut would continue to trigger cycle when user opened character sheet.
- Tooltip would disappear when clicking tokens in stack.
- Clicking on the token would not always cycle the stack.

## [0.4.0] 2020-07-20

### ADDED

- Initial Release
- Added keyboard shortcut for cycling.
