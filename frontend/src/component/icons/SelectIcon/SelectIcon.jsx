import React, { useState } from "react";
import IconBarman from "../IconBarman/IconBarman";
import IconCockOne from "../IconCockOne/IconCockOne";
import IconCockTwo from "../IconCockTwo/IconCockTwo";
import IconGrill from "../IconGrill/IconGrill";
import IconHotFood from "../IconHotFood/IconHotFood";
import IconPhoto from "../IconPhoto/IconPhoto";
import IconWaiter from "../IconWaiter/IconWaiter";
import IconWallet from "../IconWallet/IconWallet";
import IconWow from "../IconWow/IconWow";
import IconHands from "../IconHands/IconHands";
import IconCalendar from "../IconCalendar/IconCalendar";
import IconFood from "../IconFood/IconFood";
import IconPovar from "../IconPovar/IconPovar";
import IconDish from "../IconDish/IconDish";
import IconNatural from "../IconNatural/IconNatural";

export default function SelectIcon({ name, classNameWrapper }) {
  return (
    <>
      {name === "witer" && <IconWaiter classNameWrapper={classNameWrapper} />}
      {name === "wallet" && <IconWallet classNameWrapper={classNameWrapper} />}
      {name === "hot_food" && (
        <IconHotFood classNameWrapper={classNameWrapper} />
      )}
      {name === "cock1" && <IconCockOne classNameWrapper={classNameWrapper} />}
      {name === "cock2" && <IconCockTwo classNameWrapper={classNameWrapper} />}
      {name === "barman" && <IconBarman classNameWrapper={classNameWrapper} />}
      {name === "photo" && <IconPhoto classNameWrapper={classNameWrapper} />}
      {name === "grill" && <IconGrill classNameWrapper={classNameWrapper} />}
      {name === "wow" && <IconWow classNameWrapper={classNameWrapper} />}
      {name === "natural" && (
        <IconNatural classNameWrapper={classNameWrapper} />
      )}
      {name === "hands" && <IconHands classNameWrapper={classNameWrapper} />}
      {name === "calendar" && (
        <IconCalendar classNameWrapper={classNameWrapper} />
      )}
      {name === "food" && <IconFood classNameWrapper={classNameWrapper} />}
      {name === "povar" && <IconPovar />}
      {name === "dish" && <IconDish classNameWrapper={classNameWrapper} />}
    </>
  );
}
