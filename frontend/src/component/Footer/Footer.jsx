import Link from "next/link";
import React from "react";
import { ADRESS, EMAIL, SITE_NAME, URL_HOME } from "../../utils/const";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import NavCallButton from "../uikit/NavCallButton/NavCallButton";
import s from "./Footer.module.scss";
// TODO: Добавить редиректы на нужные блоки
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.two_column}>
          <div className={s.column}>
            <Link prefetch={false} className={s.logo_link} href="/">
              <a>
                <LazyImageWrapper
                  src={"/uikit/logo.svg"}
                  className={[s.logo]}
                  wrapperClass={s.logo_wrapper}
                  alt="Логотип"
                />
              </a>
            </Link>
            <p className={s.copyright}>© 2021 {SITE_NAME}</p>
            <p className={s.subtitle}>
              Фуршет в офис на мероприятия в Москве и Московской области
            </p>
          </div>
          <div className={s.column}>
            <nav className={s.nav}>
              <Link prefetch={false} href="/" className={s.link}>
                <a className={s.text_link}>Фуршет</a>
              </Link>
              <Link prefetch={false} href="/stations" className={s.link}>
                <a className={s.text_link}>Гастрономические станции</a>
              </Link>
              <Link prefetch={false} href="/masterclass" className={s.link}>
                <a className={s.text_link}>Мастер-классы</a>
              </Link>
              <Link prefetch={false} href="/bar" className={s.link}>
                <a className={s.text_link}>Выездные бары</a>
              </Link>
              <Link prefetch={false} href="/" className={s.link}>
                <a className={s.text_link}>Вопросы-ответы</a>
              </Link>
              <Link prefetch={false} href="/news" className={s.link}>
                <a className={s.text_link}>Наши кейсы</a>
              </Link>
            </nav>
          </div>
        </div>
        <div className={s.two_column}>
          <div className={s.column}>
            <a href={`mailto:${EMAIL}`} className={s.mail}>
              {EMAIL}
            </a>
            <p className={s.adress}>{ADRESS}</p>
            <Link prefetch={false} className={s.privacy_link} href="/privacy">
              <a className={s.privacy_text}>Политика конфиденциальности </a>
            </Link>
            <div className={s.social}></div>
          </div>
          <div className={s.column}>
            <div className={s.last_column}>
              <NavCallButton />
              <div className={s.yandex_block}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <p className={s.description}>
          Все ресурсы сайта {URL_HOME}, включая текстовую, графическую,
          фотографическую и видео информацию, структуру, дизайн и оформление
          страниц, товарные знаки, доменное имя, фирменное наименование являются
          объектами авторского права и прав на интеллектуальную собственность,
          защищены российским законодательством и международными соглашениями об
          охране авторских прав и интеллектуальной собственности. Запрещается
          любое воспроизведение, в том числе использование, копирование,
          включение содержания страниц данного сайта и иных объектов в структуру
          других сайтов без предварительного согласия правообладателя.
          Запрещаются любые иные действия, в результате которых у пользователей
          Интернета может сложиться впечатление, что представленные материалы не
          имеют отношения к домену {URL_HOME}.
        </p>
      </div>
    </footer>
  );
}
