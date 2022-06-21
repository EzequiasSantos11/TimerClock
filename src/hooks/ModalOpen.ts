import { useState } from "react";

export function useShowModal() {
  const [visible, setVisible] = useState(false);
  function openModaFunction(): void {
    setVisible(true);
  }
  function closeModalFunction(): void {
    setVisible(false);
  }
  return {
    visible,
    setVisible,
    openModaFunction,
    closeModalFunction,
  };
}

export function useShowModifyOrDelete() {
  const [visibleModify, setVisibleModify] = useState(false);
  function openModifyFunction() {
    setVisibleModify(true);
    return visibleModify;
  }
  function closeModifyFunction(): void {
    setVisibleModify(false);
  }
  return {
    visibleModify,
    setVisibleModify,
    openModifyFunction,
    closeModifyFunction,
  };
}
