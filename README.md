# Cycle Token Stack

For the Foundry Virtual Tabletop (FVTT), this small module helps a you cycle through tokens that are stacked upon one another using left-mouse clicks or a '[' key stroke. You can also click ']' to push a token you can control behind all others.

**NOTE:** this repo is a copy of the repo which was at <https://github.com/aka-beer-buddy/fvtt-cycle-token-stack>, but as of 2023-01-06, is no longer there.

## Features/Behaviors

- **Left-click on a token** will either select it (if unselected) or **invoke a cycle** action which selects the next token in the stack and brings it to the top of the stack. Each subsequent left-click will cycle the stack once.
- A hotkey _(default is left square bracket)_ behaves the same as a left-mouse click, either selecting the token being hovered over or cycling to a new token.
- A hotkey _(default is right square bracket)_ will select all tokens under the token hovered over and **move that token behind all the others**.
- Keyboard shortcuts are customizable.
- The player can only cycle through tokens that they own.  The GM can cycle through all tokens in the stack.
- A stack is defined as any two or more tokens overlapping with the current token being hovered over by the mouse. It may include tokens that are not directly under the mouse cursor.  This is done so that small tokens buried behind a large token can be retrieved without knowing the precise location of the buried token.

## Module Configuration Settings

The Cycle Token Stack module has three configuration settings that each player can define:

- Control the click delay that the module waits before cycling the tokens. Any click or move happening before this delay will cancel the cycle operation. This is needed to avoid conflict with double-click behaviour.  The delay is defined in milliseconds and defaults to 300 and need only be increased when accessibility settings changes the double-click time span.  A value above 250 and below 1000 is recommended.
- Define a hotkey that performs a cycle similar to left-click button.  The default is the '[' character (left square bracket). Leave the field blank if you don't want a hotkey.
- Define a hotkey that performs a selection of all tokens under the current one and moves them on top.  The default is the ']'  character (right square bracket).

## Known Issues

- If a large token has a number of smaller ones spread around under it, the selection process goes 1) large token, 2) small token, 3) large token again, 4) other small token, 5) large token again, etc. instead of a round-robin behaviour.
- Changes made on the GM machine are not reflected on the player machine.
- The relative positions in the stack are not preserved between sessions or when pressing F5 to refresh the browser.
- Players can end up having NPCs hidden behind their token with no way of showing the NPC.
- On hex grids, adjacent tokens are seen as part of the stack.

## Troubleshooting

- The cycling or keystroke becomes unresponsive. Moving the mouse cursor off the token and back on will 'wake up' the cycle token behaviour.
- Nothing happens for player when clicking a token: If a player can only control a single token (or no tokens), then no cycling occurs. Check player permissions for token to see if they own the token.
- Clicking multiple times causes character sheet to appear: This means you are clicking too quickly in succession. This is intended behaviour. There is a required delay between clicks so that double-click functionality can pass through.
