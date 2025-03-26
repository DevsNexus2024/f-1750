/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons448 } from "../../icons/Icons448";
import { Icons449 } from "../../icons/Icons449";
import { Icons456 } from "../../icons/Icons456";
import { Icons457 } from "../../icons/Icons457";
import { Icons458 } from "../../icons/Icons458";
import { Icons459 } from "../../icons/Icons459";
import { Icons462 } from "../../icons/Icons462";
import { Icons463 } from "../../icons/Icons463";
import { Icons468 } from "../../icons/Icons468";
import { Icons485 } from "../../icons/Icons485";
import { Icons512 } from "../../icons/Icons512";
import { Icons658 } from "../../icons/Icons658";
import { Icons865 } from "../../icons/Icons865";
import { Icons880 } from "../../icons/Icons880";
import { Icons882 } from "../../icons/Icons882";
import { NameBell1 } from "../../icons/NameBell1";
import { NameStore1 } from "../../icons/NameStore1";
import { ButtonsButton } from "../ButtonsButton";
import { Component } from "../Component";
import { MenuCta } from "../MenuCta";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import "./style.css";

export const PropertyFrameWrapper = ({
  property1,
  className,
  logoEmxBlue = "https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/logo-emx-02-blue-redone--1--2-4.svg",
  propertyDefaultWrapperComponentIcon,
  override,
  propertyDefaultWrapperComponentPropertyDefalutClassName,
  propertyDefaultWrapperComponentIcon1,
  propertyDefaultWrapperComponentIcon2,
  propertyDefaultWrapperProperty1 = "default",
  propertyDefaultWrapperComponentIcon3,
  propertyDefaultWrapperComponentProperty1,
  buttonsButtonIcon = <NameStore1 className="icons-4" color="#01131A" />,
  buttonsButtonIcon1 = (
    <NameBell1 className="icons-4" color="#66A2EB" stroke="#32404A" />
  ),
  buttonsButtonIcon2 = <Icons456 className="icons-4" />,
}) => {
  return (
    <div className={`property-frame-wrapper ${property1} ${className}`}>
      {["frame-1822", "frame-48095929", "variant-4"].includes(property1) && (
        <div className="frame-4">
          {["frame-1822", "variant-4"].includes(property1) && (
            <img
              className="logo-EMX-blue"
              alt="Logo EMX blue"
              src={
                property1 === "variant-4"
                  ? "https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/logo-emx-02-blue-redone--1--2-5.svg"
                  : logoEmxBlue
              }
            />
          )}

          {property1 === "frame-48095929" && (
            <>
              <ButtonsButton
                className="buttons-button-instance"
                hierarchy="secondary-gray"
                icon="only"
                override={buttonsButtonIcon}
                size="md"
                stateProp="default"
              />
              <div className="frame-5">
                <div className="text-wrapper-3">12.058.264/0001-12</div>

                <div className="frame-6">
                  <p className="p">
                    <span className="span">Agência: </span>

                    <span className="text-wrapper-4">0002</span>
                  </p>

                  <div className="ellipse" />

                  <p className="p">
                    <span className="span">Conta: </span>

                    <span className="text-wrapper-4">62145620-9</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {property1 === "component-5" && (
        <div className="component-2">
          <div className="frame-7">
            <img
              className="img"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/ellipse-1-1.svg"
            />

            <div className="frame-8">
              <div className="miguel-arthur">João gabriel</div>

              <div className="gmail-com">Conta jurídica</div>
            </div>
          </div>

          <div className="icons-458-wrapper">
            <Icons458 className="ellipse-2" />
          </div>
        </div>
      )}

      {property1 === "variant-5" && (
        <>
          <div className="frame-9">
            <img
              className="logo-EMX-blue-2"
              alt="Logo EMX blue"
              src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/logo-emx-02-blue-redone--1--2-6.svg"
            />

            <div className="icons-459-wrapper">
              <Icons459 className="icons-3" color="black" />
            </div>
          </div>

          <div className="frame-10">
            <div className="frame-11">
              <div className="frame-7">
                <img
                  className="ellipse-2"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/ellipse-2-1@2x.png"
                />

                <div className="frame-12">
                  <div className="text-wrapper-5">João gabriel</div>

                  <div className="text-wrapper-6">Conta jurídica</div>
                </div>
              </div>

              <Icons457 className="icons-4" color="#01131A" />
            </div>

            <div className="profile-menu-2">
              <Component
                className="component-1-instance"
                icon={<Icons658 className="icons-4" color="#4B5964" />}
                property1="defalut"
                text="Meu perfil"
              />
              <Component
                className="component-1-instance"
                icon={<Icons462 className="icons-4" />}
                property1="defalut"
                text="Segurança"
              />
              <Component
                className="component-4"
                divClassName="component-3"
                icon={<Icons463 className="icons-4" />}
                property1="defalut"
                text="Sair"
              />
            </div>
          </div>
        </>
      )}

      {["frame-1822", "frame-48095929", "variant-4", "variant-5"].includes(
        property1,
      ) && (
        <div className="frame-13">
          {["frame-1822", "frame-48095929", "variant-4"].includes(
            property1,
          ) && (
            <div className="frame-14">
              {property1 === "frame-1822" && (
                <>
                  <div className="text-wrapper-7">Menu</div>

                  <Icons459 className="icons-3" color="#01131A" />
                </>
              )}

              {property1 === "variant-4" && (
                <Icons512 className="icons-3" color="black" />
              )}

              {property1 === "frame-48095929" && (
                <>
                  <ButtonsButton
                    className="buttons-button-instance"
                    hierarchy="secondary-color"
                    icon="only"
                    override={buttonsButtonIcon1}
                    size="sm"
                    stateProp="default"
                  />
                  <ButtonsButton
                    className="buttons-button-instance"
                    hierarchy="secondary-color"
                    icon="only"
                    override={buttonsButtonIcon2}
                    size="sm"
                    stateProp="default"
                  />
                </>
              )}
            </div>
          )}

          {property1 === "variant-5" && (
            <MenuCta className="menu-CTA-instance" property1="default" />
          )}

          <div className="frame-15">
            {property1 === "frame-1822" && (
              <>
                <MenuCta className="menu-CTA-instance" property1="default" />
                <div className="line-wrapper">
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/line-13-6.svg"
                  />
                </div>

                <PropertyDefaultWrapper
                  className="menu-CTA-instance"
                  componentIcon={override}
                  componentIcon1={propertyDefaultWrapperComponentIcon}
                  componentIcon2={propertyDefaultWrapperComponentIcon1}
                  componentIcon3={propertyDefaultWrapperComponentIcon2}
                  componentProperty1={propertyDefaultWrapperComponentProperty1}
                  componentPropertyDefalutClassName={
                    propertyDefaultWrapperComponentPropertyDefalutClassName
                  }
                  override={propertyDefaultWrapperComponentIcon3}
                  property1={propertyDefaultWrapperProperty1}
                />
                <div className="img-wrapper">
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/line-13-6.svg"
                  />
                </div>
              </>
            )}

            {property1 === "variant-4" && (
              <div className="frame-16">
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons658 className="icons-4" color="black" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons448 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons449 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons485 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons865 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons880 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
                <ButtonsButton
                  className="buttons-button-instance"
                  hierarchy="secondary-gray"
                  icon="only"
                  override={<Icons882 className="icons-4" color="#01131A" />}
                  size="xl"
                  stateProp="default"
                />
              </div>
            )}

            {property1 === "frame-48095929" && (
              <>
                <div className="frame-7">
                  <img
                    className="ellipse-2"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/ellipse-2-1@2x.png"
                  />

                  <div className="frame-12">
                    <div className="text-wrapper-5">João gabriel</div>

                    <div className="text-wrapper-6">Conta jurídica</div>
                  </div>
                </div>

                <Icons457 className="icons-4" color="#01131A" />
              </>
            )}

            {property1 === "variant-5" && (
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/line-13-8.svg"
              />
            )}
          </div>

          {property1 === "variant-5" && (
            <>
              <PropertyDefaultWrapper
                className="menu-CTA-instance"
                property1="default"
              />
              <div className="img-wrapper">
                <img
                  className="line"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/67cdc28b0d03c5c1ad93d8aa/releases/67e23c84190681836bbee8ce/img/line-13-8.svg"
                />
              </div>
            </>
          )}
        </div>
      )}

      {property1 === "profile-menu" && (
        <>
          <Component
            className="component-1-instance"
            icon={<Icons658 className="icons-4" color="#4B5964" />}
            property1="defalut"
            text="Meu perfil"
          />
          <Component
            className="component-1-instance"
            icon={<Icons462 className="icons-4" />}
            property1="defalut"
            text="Segurança"
          />
          <Component
            className="component-1-instance"
            icon={<Icons468 className="icons-4" />}
            property1="defalut"
            text="Sair"
          />
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="frame-17">
                <div className="heroicons-mini-arrow" />

                <div className="vis-o-geral">Sair</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
