import Link from "next/link";
import React from "react";
import { useState } from "react";
import spaceDigits from "../../utils/converterNumber";
import DropdownCallback from "../uikit/DropdownCallback/DropdownCallback";
import InputPhoneNumber from "../uikit/InputPhoneNumber/InputPhoneNumber";
import ItemCheckBox from "../uikit/ItemCheckBox/ItemCheckBox";
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import s from "./CartOrderContainer.module.scss";
export default function CartOrderContainer({ totalPrice }) {
  const [isOpened, setIsOpened] = useState(false);
  const [backMail, setBackMail] = useState(false);
  const [callbackType, setCallbackType] = useState("");
  const [thanksMessage, setThankMessage] = useState(false);
  const handleContinue = () => {
    setIsOpened((prev) => !prev);
  };

  const handlerThanks = () => {
    setThankMessage(true);
    setTimeout(() => {
      setThankMessage(false);
    }, 800);
  };

  const hanlderSubmit = () => {
    console.log(callbackType);
    handlerThanks();
  };

  return (
    <div className={s.container}>
      {!thanksMessage && (
        <>
          <p className={s.cost}>
            <span className={s.text}>Сумма заказа</span>
            <span className={s.amount}>{spaceDigits(totalPrice)}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {!isOpened && (
            <>
              <PrimaryButton
                onClick={handleContinue}
                className={s.next_btn}
                text={"Перейти к оформлению"}
              />
              <p className={s.description}>
                Стоимость доставки зависит от объема заказа и адреса,
                рассчитывается после оформления заявки менеджером
              </p>
            </>
          )}
          {isOpened && (
            <form className={s.form}>
              <div className={s.inputs}>
                <InputPhoneNumber className={s.input} />
                <DropdownCallback
                  className={s.dropdown}
                  classNameHeader={s.dropdown_head}
                  classNameList={s.dropdown_list}
                  setCallbackType={setCallbackType}
                />
              </div>
              <div className={s.checkbox_container}>
                <ItemCheckBox isCheck={backMail} setIsCheck={setBackMail} />
                <p className={s.back_order}>
                  Хочу получить копию заказа на свой адрес электронной почты
                </p>
              </div>
              {backMail && (
                <input
                  type="text"
                  placeholder="ivanov@yandex.ru"
                  className={s.input_email}
                />
              )}
              <p className={s.about_policy}>
                Нажимая на кнопку «Оформить заказ», вы даете согласие{" "}
                <Link prefetch={false} href={"/privacy"}>
                  <a className={s.link}>
                    на обработку своих персональных данных
                  </a>
                </Link>
              </p>
              <PrimaryButton
                text="Оформить заказ"
                onClick={hanlderSubmit}
                className={s.submit_btn}
              />
            </form>
          )}
        </>
      )}
      {thanksMessage && (
        <>
          <h2 className={s.title}>Заказ отправлен!</h2>
          <p className={s.confirm_text}>
            В ближайшее время наш менеджер свяжется по указанному вами номеру:{" "}
            <span className={s.number}>{"+77323022"}</span>{" "}
          </p>
        </>
      )}
    </div>
  );
}
