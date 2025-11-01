//oxu ->
//burdada iconlari falan her seyi ayri bir sekilde professional istedim edim amma dediiyim kimi vaxt qisitli idi.....nezere alsaz sevinerem.... 


import React from "react";
import { LogoIcon } from "./LogoIcon";



export default function Icon({
  name,
  className = "",
  size = 30,
  color = "currentColor",
}) {
  const iconComponents = {
    LogoIcon: LogoIcon
  };

  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} color={color} />;
}
