/**
 * Cycle through a stack of tokens using the left-click or keyboard shortcut.
 * Copyright (c) 2020 by John Sandberg, rights granted as described in LICENSE file
 */

/**
  * Class for retaining current control and hover state and processing cycle requests.
  */

class CycleTokenStack {

  constructor() {
    this.tokenStack = [];
    this.hovering = null;
    this.cancelClick = false;
    this.clicking = false;
    this.isTooltipOK = false;

    this.keyCycleForward = '[';
    this.keyCycleBackward = ']';
    this.showTokenList = "stacked";
    this.minClickDelay = 300;
  }

  IsDeactivated(e) {
    return (!this.isTooltipOK || !e || e.altKey || e.ctrlKey || e.metaKey ||
      ui.controls.controls.find(n => n.name === "token").activeTool === "target");
  }

  BuildStack(token) {
    this.tokenStack = [];
    if (token) {
      this.tokenStack = canvas.tokens.placeables.filter(t => (game.user.isGM || t.owner) &&
        (t.x + t.w > token.x && t.y + t.h > token.y && t.x < token.x + token.w && t.y < token.y + token.h));
    }
    return token;
  }

  CycleSelected(token) {
    if (!token || this.tokenStack.length < 2) return token;
    let idx = this.tokenStack.findIndex(t => t.id === token.id);
    idx = ((idx + 1) % this.tokenStack.length);
    this.tokenStack[idx].control({ releaseOthers: true });
    return this.tokenStack[idx];
  }

  UncycleSelected(token) {
    if (!token || this.tokenStack.length < 2) return token;
    this.tokenStack.forEach(t => {
      if (t.id !== token.id)
        t.control({ releaseOthers: true });
    });
    return token;
  }

  ReleaseHovered(token) {
    this.BuildStack(token);
    this.UncycleSelected(token);
  }

  RefreshStack(token) {
    this.BuildStack(token);
    this.CycleSelected(token);
  }

  OnKeyDown(e) {
    if (this.IsDeactivated(e)) return;
    if (this.hovering && e.key === this.keyCycleForward) {
      if (this.hovering._controlled)
        this.RefreshStack(this.hovering);
      else {
        this.hovering.control({ releaseOthers: true });
      }
    }
    else if (this.hovering && e.key === this.keyCycleBackward)
      this.ReleaseHovered(this.hovering);
  }

  OnMouseMove(e) {
    _CycleTokenStack.cancelClick = true;
  }

  MouseDown(t, f) {
    this.clicking = true;
    this.cancelClick = false;
    t.once('mousemove', this.OnMouseMove);
    setTimeout(() => {
      t.off('mousemove', this.OnMouseMove);
      if (!this.cancelClick) {
        if (f) this.RefreshStack(t);
      }
      this.clicking = false;
      this.cancelClick = false;
    }, this.minClickDelay);
  }

  OnMouseDown(e) {
    const c = _CycleTokenStack;
    const oe = e.data.originalEvent;
    if (c.IsDeactivated(oe) || oe.shiftKey) return;
    if (c.clicking) { c.cancelClick = true; return; }
    c.MouseDown(this, true);
  }

}

let _CycleTokenStack = new CycleTokenStack();

onkeydown = function (e) {
  e = e || event;
  _CycleTokenStack.OnKeyDown(e);
};

Hooks.on("controlToken", (token, controlled) => {
  const c = _CycleTokenStack;
  if (controlled) {
    c.isTooltipOK = true;
    token.on('mousedown', c.OnMouseDown);
  }
  else
    token.off('mousedown', c.OnMouseDown);
});

Hooks.on("hoverToken", (token, hover) => {
  const c = _CycleTokenStack;
  if (hover) {
    if (!c.clicking && !c.IsDeactivated(event)) {
      c.hovering = token;
    }
  } else {
    if (!c.clicking || c.cancelClick) {
      c.hovering = null;
    }
  }
});

Hooks.on("deleteToken", (token) => {
  _CycleTokenStack.hovering = null;
});
