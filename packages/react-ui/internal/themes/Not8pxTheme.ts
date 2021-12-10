import { exposeGetters } from '../../lib/theming/ThemeHelpers';

import { NewDefaultThemeInternal } from './NewDefaultTheme';

export class Not8pxTheme extends (class {} as typeof NewDefaultThemeInternal) {
  //#region Common variables
  public static fontSizeMedium = '14px';
  public static fontSizeLarge = '16px';
  public static get controlHeightSmall() {
    const borderWidth = parseInt(this.controlBorderWidth, 10) || 0;
    const paddingYSmall = parseInt(this.controlPaddingYSmall, 10) || 0;
    const lineHeightSmall = parseInt(this.controlLineHeightSmall, 10) || 0;
    return `${2 * borderWidth + 2 * paddingYSmall + lineHeightSmall}px`;
  }
  public static get controlHeightMedium() {
    const borderWidth = parseInt(this.controlBorderWidth, 10) || 0;
    const paddingYMedium = parseInt(this.controlPaddingYMedium, 10) || 0;
    const lineHeightMedium = parseInt(this.controlLineHeightMedium, 10) || 0;
    return `${2 * borderWidth + 2 * paddingYMedium + lineHeightMedium}px`;
  }
  public static get controlHeightLarge() {
    const borderWidth = parseInt(this.controlBorderWidth, 10) || 0;
    const paddingYLarge = parseInt(this.controlPaddingYLarge, 10) || 0;
    const lineHeightLarge = parseInt(this.controlLineHeightLarge, 10) || 0;
    return `${2 * borderWidth + 2 * paddingYLarge + lineHeightLarge}px`;
  }
  public static controlLineHeightMedium = '20px';
  public static controlLineHeightLarge = '22px';
  public static controlPaddingYSmall = '6px';
  public static controlPaddingYMedium = '9px';
  public static controlPaddingYLarge = '10px';
  //#endregion
  //#region Button
  public static get btnHeightSmall() {
    return this.controlHeightSmall;
  }
  public static get btnHeightMedium() {
    return this.controlHeightMedium;
  }
  public static get btnHeightLarge() {
    return this.controlHeightLarge;
  }
  public static btnBorderWidth = '1px';
  public static get btnOutlineWidth() {
    return `${parseInt(this.btnBorderWidth, 10) + 1}px`;
  }
  public static btnPaddingXLarge = '20px';
  public static btnIconGapSmall = '7px';
  public static btnIconGapMedium = '7px';
  public static btnIconGapLarge = '7px';
  public static btnIconSizeSmall = 'auto';
  public static btnIconSizeMedium = 'auto';
  public static btnIconSizeLarge = 'auto';
  //#endregion
  //#region Input
  public static get inputHeightSmall() {
    return this.controlHeightSmall;
  }
  public static get inputHeightMedium() {
    return this.controlHeightMedium;
  }
  public static get inputHeightLarge() {
    return this.controlHeightLarge;
  }
  public static inputWidth = '250px';
  public static get inputOutlineWidth() {
    const OutlineWidth = parseInt(this.controlOutlineWidth, 10) || 0;
    const borderWidth = parseInt(this.inputBorderWidth, 10) || 0;
    return `${OutlineWidth - borderWidth}px`;
  }
  public static inputPaddingXSmall = '10px';
  public static inputPaddingXMedium = '10px';
  public static inputPaddingXLarge = '10px';
  public static inputIconGapSmall = '2px';
  public static inputIconGapMedium = '2px';
  public static inputIconGapLarge = '2px';
  public static inputIconSizeSmall = 'auto';
  public static inputIconSizeMedium = 'auto';
  public static inputIconSizeLarge = 'auto';
  //#endregion
  //#region Select
  public static selectBorderWidth = '1px';
  public static selectPaddingXSmall = '9px';
  public static selectPaddingXMedium = '9px';
  public static selectPaddingXLarge = '9px';
  public static get selectIconGapSmall() {
    return this.btnIconGapSmall;
  }
  public static get selectIconGapMedium() {
    return this.btnIconGapMedium;
  }
  public static get selectIconGapLarge() {
    return this.btnIconGapLarge;
  }
  //#endregion
  //#region Checkbox
  public static checkboxCaptionGap = '10px';
  public static checkboxPaddingY = '0';
  public static checkboxBorderWidth = '1px';
  public static checkboxOutlineWidth = '2px';
  public static checkboxBorderWidthCompensation = '0px';
  //#endregion
  //#region Tab
  public static tabPaddingX = '20px';
  public static tabPaddingY = '10px';
  public static tabFontSize = '18px';
  public static tabLineHeight = 'normal';
  public static tabBorderWidth = '3px';
  public static tabOutlineWidth = '2px';
  //#endregion
  //#region Toggle
  public static toggleWidth = '34px';
  public static toggleBorderRadius = '10px';
  public static toggleBorderWidth = '1px';
  public static toggleOutlineWidth = '3px';
  //#endregion
  //#region Token
  public static tokenLineHeight = '1.5';
  public static tokenMarginY = '3px';
  public static tokenMarginX = '3px';
  public static tokenPaddingY = '0px';
  public static tokenPaddingX = '4px';
  public static tokenRemoveIconSize = '1em';
  public static tokenRemoveIconPaddingY = '2px';
  public static tokenRemoveIconPaddingX = '2px';
  public static tokenRemoveIconBoxSizing = 'border-box';
  public static tokenLegacyTextShift = '1px';
  public static tokenPaddingYDisabled = '1px';
  public static tokenMarginYDisabled = '2px';
  public static tokenMarginXDisabled = '2px';
  //#endregion
  //#region Spinner
  public static spinnerFontSizeSmall = '14px';
  public static spinnerFontSizeMedium = '16px';
  public static spinnerFontSizeLarge = '18px';
  public static spinnerLineHeightSmall = '1';
  public static spinnerLineHeightMedium = '1.375';
  public static spinnerLineHeightLarge = '1.33';
  public static spinnerCaptionGapSmall = '8px';
  public static spinnerCaptionGapMedium = '-6px';
  public static spinnerCaptionGapLarge = '-8px';
  //#endregion
  //#region Link
  public static linkIconMarginRight = '3px';
  //#endregion
  //#region Textarea
  public static get textareaOutlineWidth() {
    return this.controlBorderWidth;
  }
  public static get textareaFontSize() {
    return this.fontSizeMedium;
  }
  public static textareaPaddingX = '10px';
  public static get textareaLineHeight() {
    const fontSize = this.textareaFontSize;
    switch (fontSize) {
      case '14px':
        return '20px';
      case '16px':
        return '25px';
      default:
        return `${parseInt(fontSize, 10) * 1.5}px`;
    }
  }
  //#endregion
  //#region Radio
  public static radioCaptionGap = '9px';
  public static radioPaddingY = '0';
  public static radioBorderWidth = '1px';
  public static radioBorderWidthCompensation = '0px';
  public static get radioSizeAfter() {
    return `calc(${this.radioSize} + 2 * ${this.radioOutlineWidth} - 2 * ${this.radioBorderWidthCompensation})`;
  }
  public static radioVerticalAlign = '-2px';
  //#region RadioGroup
  public static radioGroupLegacyItemGap = '10px';
  //#endregion
  //#region Paging
  public static pagingFontSize = '16px';
  public static pagingPageLinkLegacyPaddingY = '5px';
  public static pagingPageForwardLinkMarginTop = '4px';
  public static pagingLineHeight = 'initial';
  public static pagingPageLinkPaddingX = '10px';
  public static pagingPageLinkPaddingY = '2px';
  public static pagingPageLinkMinWidth = 'initial';
  public static pagingPageLinkHintFontSize = '11px';
  public static pagingPageLinkHintLineHeight = '15px';
  public static pagingPageLinkBorderRadius = '16px';
  public static pagingPageLinkMargin = '2px 1px';
  public static pagingForwardIconSize = '18px';
  public static pagingForwardIconMarginTop = '0px';
  public static pagingPageForwardLinkPaddingRight = '22px';
  public static pagingDotsPadding = '6px 10px 0';
  //#endregion
  //#region Switcher
  public static switcherOutlineWidth = '2px';
  public static switcherCaptionFontSizeSmall = 'inherit';
  public static switcherCaptionFontSizeMedium = 'inherit';
  public static switcherCaptionFontSizeLarge = 'inherit';
  public static switcherCaptionLineHeightSmall = 'inherit';
  public static switcherCaptionLineHeightMedium = 'inherit';
  public static switcherCaptionLineHeightLarge = 'inherit';
  public static switcherCaptionGapSmall = '15px';
  public static switcherCaptionGapMedium = '15px';
  public static switcherCaptionGapLarge = '15px';
  public static get switcherButtonPaddingXSmall() {
    return this.btnPaddingXSmall;
  }
  public static get switcherButtonPaddingXMedium() {
    return this.btnPaddingXMedium;
  }
  public static get switcherButtonPaddingXLarge() {
    return this.btnPaddingXLarge;
  }
  //#endregion
  //#region Calendar
  public static calendarCellSize = '30px';
  public static calendarPaddingX = '15px';
  public static calendarMonthTitleMarginBottom = '10px';
  public static calendarMonthTitleLineHeight = '24px';
  public static calendarMonthTitlePaddingTop = '8px';
  public static calendarMonthTitleMarginX = '0';
  public static calendarMonthMarginBottom = '10px';
  //#endregion
  //#region DatePicker
  public static dateSelectLineHeight = '24px';
  public static pickerTodayWrapperLineHeight = 'normal';
  public static pickerTodayWrapperPaddingTop = '7px';
  public static pickerTodayWrapperPaddingBottom = '8px';
  public static pickerShadow = '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)';

  //#endregion
  //#region SidePage
  public static sidePagePaddingLeft = '30px';
  public static sidePagePaddingRight = '35px';
  public static sidePagePaddingTop = '25px';
  public static sidePagePaddingBottom = '20px';
  public static sidePageHeaderFontSize = '22px';
  public static sidePageHeaderLineHeight = '30px';
  public static sidePageHeaderPaddingBottom = '25px';
  public static sidePageHeaderPaddingTop = '25px';
  public static sidePageHeaderFixedLineHeight = '24px';
  public static sidePageHeaderFixedPaddingY = '13px';
  public static sidePageHeaderStickyOffset = '8px';
  public static sidePageFooterPaddingTop = '20px';
  public static sidePageFooterPaddingBottom = '20px';
  public static sidePageCloseButtonLegacyPaddingLeft = '37px';
  //#endregion
  //#region Tooltip
  public static tooltipPaddingY = '15px';
  public static tooltipPaddingX = '20px';
  public static tooltipMargin = '15px';
  public static tooltipPinOffsetX = '17px'; //+
  public static tooltipPinOffsetY = '17px';
  //#endregion
  //#region Hint
  public static get hintBorder() {
    return this.popupBorder;
  }
  public static get hintBorderRadius() {
    return this.popupBorderRadius;
  }
  public static hintMargin = '15px';
  //#endregion
  //#region Modal
  public static modalCloseButtonPadding = '35px';
  public static modalCloseIconSize = '14px';
  public static modalCloseLegacyGap = '26px';
  public static modalCloseWrapperLegacyGap = '7px';
  public static modalCloseButtonLegacyShift = '15px';
  public static modalPaddingTop = '30px';
  public static modalPaddingLeft = '30px';
  public static modalPaddingRight = '35px';
  public static modalHeaderFontSize = '22px';
  public static modalHeaderLineHeight = '30px';
  public static modalHeaderPaddingBottom = '11px';
  public static modalFixedHeaderPaddingBottom = '11px';
  public static modalBodyPaddingBottom = '25px';
  public static modalFooterPaddingBottom = '30px';
  public static modalPaddingBottom = '30px';
  //#endregion
  //#region Toast
  public static toastLineHeight = '20px';
  public static toastPaddingX = '20px';
  public static toastTop = '20px';
  //#endregion
  //#region Menu
  public static menuItemLineHeight = '18px';
  public static get menuItemPaddingY() {
    return this.controlPaddingYSmall;
  }
  public static menuItemIconLegacyMargin = '7px';
  public static menuItemIconLegacyShift = '-1px';
  public static menuItemLegacyPaddingX = '10px';
  public static menuItemLegacyPaddingY = '1px';
  public static menuItemIconGap = '5px';
  public static menuHeaderLineHeight = 'inherit';
  public static get menuHeaderPaddingX() {
    return this.menuItemPaddingX;
  }
  public static menuPaddingY = '5px';
  public static menuHeaderPaddingTop = '6px';
  public static menuHeaderPaddingBottom = '7px';
  public static menuHeaderLegacyPaddingRight = '10px';
  public static menuSeparatorMarginY = '5px';
  public static menuShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
  public static menuBorder = '1px solid #d5d5d5';
  //#endregion
  //#region TooltipMenu
  public static tooltipMenuPinOffset = '15px';
  //#endregion
  //#region Kebab
  public static kebabPinOffset = '15px';
  public static kebabMargin = '5px';
  //#endregion
  //#region Popup
  public static popupDropShadow = 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))';
  public static popupBoxShadow = '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)';
  //#endregion
}

export const Not8pxThemeInternal = exposeGetters(Not8pxTheme);
