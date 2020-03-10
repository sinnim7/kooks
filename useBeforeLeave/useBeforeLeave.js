export const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    const { clientY } = event;
    if (clientY <= 0) {
      // 위쪽 창 위로 벗어날 때만으로 조건 한정.
      onBefore();
      //=>  () => console.log("pls dont leave") 실행.
    }
  };
  // addEventListener 의 변화를 감지.
  // 마우스가 떠났을 때 이 함수를 작동.

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // 마우스가 document를 벗어났을 때
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  // [] =>  계속해서 이벤트가  document에 추가 되는 걸 막아 줌.
};

