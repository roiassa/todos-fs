const styles = {
  completeIcon: "#00E676",
  undoIcon: "#E53935",
  fabBG: "white",
  topButtonsBG: "#70a0ad",
  selectedBtnBGColor: "#6182a2",
  selectedBtnBorderBottom: "3px solid #7bb1b1 !important",
  selectedBtnBorderRadius: "0px 0px 10px 10px !important",
  selectedBtnBorderRight: "none !important",
};

export function customStyles() {
  return {
    completeIcon: {
      color: styles.completeIcon,
    },
    undoIcon: {
      color: styles.undoIcon,
    },
    fabBackGround: {
      backgroundColor: styles.fabBG,
    },
    topButtonsBG: {
      backgroundColor: styles.topButtonsBG,
    },
    selectedButtons: {
      backgroundColor: styles.selectedBtnBGColor,
      borderBottom: styles.selectedBtnBorderBottom,
      borderRadius: styles.selectedBtnBorderRadius,
      borderRight: styles.selectedBtnBorderRight,
    },
  };
}
