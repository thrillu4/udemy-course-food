require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from "./modules/tabs";
import modals from "./modules/modals";
import timer from "./modules/timer";
import cards from "./modules/cards";
import forms from './modules/forms';
import slides from "./modules/slides";
import calc from "./modules/calc";
import {openModal} from './modules/modals';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
    calc();
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modals("[data-modal]", ".modal", modalTimerId);
    timer('.timer', '2022-12-02');
    cards();
    forms('form', modalTimerId);
    slides({
        container: ".offer__slider",
        slide: ".offer__slide",
        prevArrow: ".offer__slider-prev",
        nextArrow: ".offer__slider-next",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    }
    );
});