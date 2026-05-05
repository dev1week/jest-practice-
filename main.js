import { ClickCounter } from "./ClickCounter/ClickCounter.js";
import { ClickCounterView } from "./ClickCounter/ClickCounterView.js";

const clickCounter = ClickCounter();
const updateEl = document.getElementById("counter-display");
const triggerEl = document.querySelector("button");

const view = ClickCounterView(clickCounter, { updateEl, triggerEl });
view.updateView();
